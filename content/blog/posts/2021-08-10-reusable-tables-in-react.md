---
authorId: r0bc4ry
categories:
  - javascript
  - react
date: '2021-08-10'
slug: reusable-tables-in-react
title: Reusable Tables in React
---

Within a large application, it’s fairly common to have multiple tables and they are likely to live in different sections of your app. And depending on their use, they may all have slightly different feature sets - but still maintain a common look and feel. Maintaining these tables can get unwieldy quickly, so I wanted to try creating a simple, reusable, extensible component that I could use as a wrapper for all of these tables.

First off, what should the general architecture of the component be? We’ll need general table properties such as what data the table contains, what columns the table should have, or what to show when the table is empty. I’d also like to avoid massaging the data into a set format for the table, so I decided each column should take in the raw data for a row and determine how to display it. This allows us to just pass in our raw data from our API or cache, and have each column handle itself independently.

```tsx
/**
 * An interface defining our general table properties that aren't specific to an single column.
 *
 * data: our data
 * columns: an array of Column objects, determining how we display our data
 */
interface TableProps {
  data: any[];
  columns: Column[];
}

/**
 * An interface defining a single column and how it's displayed.
 *
 * headElement: the JSX.Element shown in the head of our column
 * bodyElement: the JSX.ELement shown in each body cell of our column
 */
interface Column {
  headElement?: JSX.Element;
  bodyElement: (data) => JSX.Element;
}
```

Okay, so we’ve got our table interfaces - so how do we use them? For our table’s head row, we’ll need to loop over each column and simply create a table cell containing our headElement. For the body, we do a very similar process, but we should loop through our data - and then for each data point we’ll then loop over our columns to create their bodyElement. And that’s it, a simple reusable table that can be styled once and used anywhere.

```tsx
const DataTable: React.FC<TableProps> = ({ data, columns }) => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell>{column.headElement}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((currentValue) => (
            <TableRow>
              {columns.map((column) => (
                <TableCell>{column.bodyElement(currentValue)}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
```

Okay… but this is pretty basic, what about some more advanced features or customization? Well let’s add a couple things to our table to see. First, what should we show when our table is empty? Since that applies the the overall table, and not a particular column we can simply add a `noDataElement` to our TableProps and then show that element when data length is zero.

```tsx
interface TableProps {
  ...
  noDataElement?: JSX.Element;
}

{data.length === 0 && (
  <TableRow>
    <TableCell colSpan={columns.length}>{noDataComponent}</TableCell>
  </TableRow>
)}
{data.length > 0 &&
  data.map((currentValue) => (
    ....
  ))}
```

What about a column property, such as the width of a column? Well first we should add the width to the Column interface, then in our JSX we’ll need a way to set the column width. Because of the quirks of HTML tables, I was able to do this by adding a colgroup above our table head that set a width for each col (if width exists).

```tsx
interface Column {
  width?: string;
}

<colgroup>
  {columns.map((column) => {
    return column.width ? <col width={column.width} /> : <col />;
  })}
</colgroup>
```

Okay, so now the big one I’m sure everyone is interested in… sorting. Since our data is passed in without any formatting and then looped over, we simply need to know which property to sort on. But how should we go about that? For each Column we could simply tell it the data property that column should be sorted by, and then add an element in the column head that saves that property to the component state.

```tsx
interface Column {
    ...
    sortBy?: string
}
```

Now that we know which property to sort the column by, how do we trigger it? We simply add an onClick element to our table head, that would save the currently clicked column sortBy using a React useState. Then we just need to sort our data based on the current sortBy state, and then loop over that sortedData instead of the unsorted data passed directly to our table component. This also allows us to leave sortBy empty, and have the column head click do nothing - allowing only some columns to be sortable if desired.

```tsx
const [sortBy, setSortBy] = useState<string>();
// TODO This is just a very basic example, you'll most likely want to replace this with your own sorting function
const sortedData = data.sort(function (a, b) {
  return a[sortBy] - b[sortBy];
});

<TableHead>
  <TableRow>
    {columns.map((column) => (
      <TableCell>
        <div>{column.headElement}</div>
        {column.sortBy && (
          <div onClick={setSortBy(column.sortBy)}>
            {/* TODO Place your sorting icon(s) here. */}
          </div>
        )}
      </TableCell>
    ))}
  </TableRow>
</TableHead>
```

And that’s it! You now have a basic, reusable table that you can easily style once and add/remove features as needed. I’ve included the Gist of the full component below, but let me know what you think or if you can think of a better way to tackle any of these features in your own tables.
