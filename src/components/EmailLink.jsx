const EmailLink = (props) => {
    const { subject, body, children, email, onClick, className } = props;
  
    return (
      <div>
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} target="_blank" rel="noopener noreferrer">
          <button type="button" className={className || ""} onClick={onClick}>
            {children}
          </button>
        </a>
      </div>
    );
  };

  export default EmailLink;
  