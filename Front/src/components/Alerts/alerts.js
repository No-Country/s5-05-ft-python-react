import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

/* MySwal.fire({
  title: <p>Hello World</p>,
  didOpen: () => {
    // `MySwal` is a subclass of `Swal` with all the same instance & static methods
    MySwal.showLoading();
  },
}).then(() => {
  return MySwal.fire(<p>Shorthand works too</p>);
}); */

export const alertOk = (text) => {
  return Swal.fire({
    position: "center",
    icon: "success",
    title: text,
    showConfirmButton: false,
    timer: 1500,
  });
};

export const errorAlert = (text = "") => {
  return Swal.fire({
    position: "center",
    icon: "error",
    title: "Ups",
    text: text,
    showConfirmButton: false,
    timer: 1500,
  });
};
