function ConfirmBtn({ children, onClick }) {
  return (
    <button className="btn-confirm" onClick={onClick}>
      {children}
    </button>
  );
}

export default ConfirmBtn;
