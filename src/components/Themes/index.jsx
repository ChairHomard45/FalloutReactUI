function Themes() {

    const changeColor = (primaryColor, secondaryColor) => {
        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);
      };


    return (
        <div>
            <h1> Themes </h1>
            <div>
            <label>
                <input type="radio" name="color" value="rgb(255, 0, 0)" onChange={() => changeColor('rgb(255, 0, 0)', '#ffffff')} />
                Red
            </label>
            <label>
                <input type="radio" name="color" value="rgb(0, 255, 0)" onChange={() => changeColor('rgb(0, 255, 0)', '#ffffff')} />
                Green
            </label>
            <label>
                <input type="radio" name="color" value="rgb(0, 0, 255)" onChange={() => changeColor('rgb(0, 0, 255)', '#ffffff')} />
                Blue
            </label>
            </div>
        </div>
    )
}

export default Themes
