function Scroll(props) {
    return(
        <div style={{ overflowY: 'Scroll', border: '5px black', height: '500px'   }}>
            { props.children}
        </div>
       
    );
}

export default Scroll;