import BookList from './src/components/template/BookList';
import EditBook from './src/components/template/EditBook';
import useAppViewModel from './src/core/presentation/useAppViewModel';
import useBooksViewModel from './src/core/presentation/useBooksViewModel';

export default function () {
  const {isEditing, toggleEditing, selectedBook} = useAppViewModel();

  if (isEditing) {
    return <EditBook toggleEditing={toggleEditing} book={selectedBook} />;
  }

  return <BookList toggleEditing={toggleEditing} />;
}
