import Swal from "sweetalert2";

export const showAlert = (title, text, icon) => {
  return Swal.fire({
    title: title,
    text: text,
    icon: icon,
    confirmButtonColor: "#3085d6",
    confirmButtonText: "OK",
  });
};
