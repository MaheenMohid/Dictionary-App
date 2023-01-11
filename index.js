const context = (
    <div class="wrapper">
        <header>English Dictionary </header>
        <div className="search">
            <input type="text" placeholder="Search a word" />
            <i class="fas fa-search"></i>
            <span class="material-icons">Close</span>
        </div>
        <ul>
            <li className="word">
                <div className="details">
                    <p>Happy</p>
                    <span>adjective /'hapi/</span>
                </div>
            </li>
            <div className="content">
                <li class="meaning">
                    <div className="details">

                        <p>Meaning</p>
                        <span>Feeling or showing pleasure or contentment</span>
                    </div>
                </li>

            </div>


        </ul>       </div>

)
ReactDOM.render(context, document.getElementById('root'))
