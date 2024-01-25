import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const toastOptions = { position: 'top-center', autoClose: 3000 };

export const toastSuccess = message => toast.success(message, toastOptions);

export const toastError = message => toast.error(message, toastOptions);
