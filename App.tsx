import BookList from './src/components/template/BookList';
import EditBook from './src/components/template/EditBook';
import useBooksViewModel from './src/core/presentation/useBooksViewModel';

export default function () {
  const {books, isEditing, toggleEditing} = useBooksViewModel();

  if (!isEditing) {
    return (
      <EditBook
        {...{
          toggleEditing,
        }}
      />
    );
  }

  return (
    <BookList
      {...{
        books,
        toggleEditing,
      }}
    />
  );
}
