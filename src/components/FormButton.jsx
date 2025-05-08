const FormButton = ({ children, onClick }) => (
    <button
      type="submit"
      onClick={onClick}
      className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
    >
      {children}
    </button>
  );
  
  export default FormButton;