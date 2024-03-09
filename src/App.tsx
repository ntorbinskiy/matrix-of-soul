import "./App.css";
import Form from "./Form";
import Matrix from "./Matrix";

function App() {
  return (
    <>
      <div className="wrap">
        <div className="main">
          <section className="sect_form">
            <div className="cont">
              <form
                action="result/index.php"
                className="form ajax_submit"
                method="post"
              >
                {/* <div className="line_form">
                  <div className="label">Ім'я</div>
                  <input type="text" className="input" name="name"></input>
                </div>
                <div className="line_form">
                  <div className="label">Дата народження</div>
                  <input type="text" className="input" name="birthbay"></input>
                  <div className="error_text">Введіть правильну дату</div>
                </div> */}
                <Form />
                <div className="submit">
                  <button type="submit" className="submit_btn">
                    Розрахувати
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
      <Matrix />
    </>
  );
}

export default App;
