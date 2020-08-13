

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
        }
       #footer {
           padding-top: 16px;
       }
       a {
           color: #006400
       }
      
            `}
        </style>
    </div>

)

export default Footer