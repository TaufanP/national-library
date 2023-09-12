import {BookDataSourceImp} from '../../core/data/dataSourcesImp/book';
import {BookRepositoryImp} from '../../core/data/repositoriesImp/book';
import booksCase from '../../core/domain/useCases/book';

const bookDataSource = new BookDataSourceImp();
const bookRepository = new BookRepositoryImp(bookDataSource);
const booksUseCase = booksCase(bookRepository);

export {booksUseCase};
