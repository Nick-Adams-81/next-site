

const Footer = () => (
    <div>
        <footer className="page-footer font-small blue">
            <div className="footer-copyright text-center py-3" id="footer">© 2020 Copyright:
             <a href="#"> Nick Adams</a>
            
            </div>
        </footer>
        <style jsx>
            {`
        footer {
            background: black;
            
            bottom: 0;
            width: 100%
            z-index: 1;
        }
       #footer {
           padding-top: 16px;
           width: 100%
       }
       a {
           color: #006400
       }
      
            `}
        </style>
    </div>

)

export default Footer