---
authorId: r0bc4ry
categories:
  - javascript
  - react
date: '2021-08-10'
slug: reusable-tables-in-react
title: Reusable Tables in React
---

Within a large application, it’s common to have multiple tables in different sections of your app that maintain a common look and feel. Keeping these tables styles and features in sync can get unwieldy quickly, so I wanted to try creating a simple, reusable, extensible component that could be used as a common starting point for all of these tables. That way style or behavior changes could be done in one spot instead of in numerous unrelated files.

So, first off, what should the general architecture of the component be? We’ll need general table properties such as what data the table contains, what columns the table should have, or what to show when the table is empty. I’d also like to avoid modifying the underlying data into a set format for the table. To avoid this, I decided each column should take in the raw data for a row and then the column can worry about how to display it properly. This allows the columns to be independent of each other and the data, letting us simply use the API or cached data.

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

Okay, so we’ve got our table interfaces - so how do we use them? Our table is divided into the head row and the body rows, so first let's worry about the head. Here we simply need to loop over each column and create a table cell containing our `headElement`. This can be a simple string or a complex JSX element, that's the benefit of this approach! For the body rows, we do a very similar process, but we need to wrap our column loop to loop through the data. For each data point we’ll do the same process of looping over our columns, letting them create their `bodyElement`. And that’s the basics! A simple reusable table that can be styled once and used anywhere.

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

Okay… but this is pretty basic, and I promised an extensible component, so what about some more advanced features or customization? Well let’s add a couple of things to our table to see how we could expand the tables feature set. First, what should we show when our table is empty? Since that's a concern of the overall table, and not a particular column, we can add a `noDataElement` to our `TableProps` and then show that element when data length is zero.

```tsx
// Add to our interface
interface TableProps {
  ...
  noDataElement?: JSX.Element;
}

// Update our TableBody loop
<TableBody>
  {data.length === 0 && (
    <TableRow>
      <TableCell colSpan={columns.length}>{noDataComponent}</TableCell>
    </TableRow>
  )}
  {data.length > 0 &&
    data.map((currentValue) => (
      ...
    ))}
</TableBody>

```

What about a column property, such as the width of a column? Well first we should add the width to the `Column` interface, then in our JSX we’ll need a way to set the column width. Because of the quirks of HTML tables, I was able to do this by adding a colgroup above our table head that set a width for each col (if a width exists).

```tsx
// Add to our interface
interface Column {
  ...
  width?: string;
}

// Add new colgroup section to define column width
<TableContainer>
  <Table>
    <colgroup>
      {columns.map((column) => {
        return column.width ? <col width={column.width} /> : <col />;
      })}
    </colgroup>
    <TableHead>
      ...
    </TableHead>
    <TableBody>
      ...
    </TableBody>
  </Table>
</TableContainer>
```

Okay, so now the big one I’m sure everyone is interested in… sorting. Since our data is passed in without any formatting and then looped over, we simply need to know which property to sort on, sort the data by that property, and then loop. But how should we do that? For each column we can tell it the data property that column should be sorted by, and then add an element in the column head that saves that property to the component state. This approach also has the benefit of disabling sorting on a column by simply not providing a `sortBy` property on that column.

```tsx
// Add to our interface
interface Column {
    ...
    sortBy?: string
}
```

Now that we know which property to sort the column by, how do we trigger it? A sorting icon with an onClick event in out table head should work. When clicked it will save the currently clicked column `sortBy` using a React useState. Then we just need to sort our data based on the current `sortBy` state, and loop over that `sortedData` instead of the unsorted data passed directly to our table component. This also allows us to leave `sortBy` empty, and have the column head click do nothing - allowing only some columns to be sortable if desired.

```tsx
// Add useState() to our component and a function to handling data sorting
const [sortBy, setSortBy] = useState<string>();
// TODO This is just a very basic example, you'll most likely want to replace this with your own sorting function
const sortedData = data.sort(function (a, b) {
  return a[sortBy] - b[sortBy];
});

// Update our TableHead to include our sorting icon(s)
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

[You can find the full gist for this component here!](https://gist.github.com/r0bc4ry/8599ea9c7ac6f326912fd196e88f7f66)
