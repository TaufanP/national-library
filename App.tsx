import BookList from './src/components/template/BookList';
import EditBook from './src/components/template/EditBook';
import {booksUseCase} from './src/config/coreInjection';
import useAppViewModel from './src/core/presentation/useAppViewModel';

export default function () {
  const {isEditing, toggleEditing, selectedBook} = useAppViewModel();

  if (isEditing) {
    return (
      <EditBook
        toggleEditing={toggleEditing}
        book={selectedBook}
        booksCase={booksUseCase}
      />
    );
  }

  return <BookList toggleEditing={toggleEditing} booksCase={booksUseCase} />;
}
