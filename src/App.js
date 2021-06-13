import AppWrapper from './App.style';
import { SearchOutlined } from '@ant-design/icons';

function App() {
  return (
    <AppWrapper>
      <div id="body">
        <div id="body-left">
          <div id="search-css">
            <div id="search">
              <i class="fas fa-search"></i>
              <SearchOutlined className="search-icon" /><input type="text" placeholder="Search" />
            </div>
          </div>
          <div id="stock-list">
            <div className="stocks-css">
              <div className="stocks">
                <div>
                  <p><b>Business News</b></p>
                  <p>From Yahoo</p>
                </div>
                <div>
                </div>
              </div>
            </div>
            <div className="stocks-css">
              <div className="stocks">
                <div>
                  <p><b>AAPL</b></p>
                  <p>Apple Inc.</p>
                </div>
                <div className="stock-price">
                  <p><b>34557.21</b></p>
                  <button className="loss">-73.03</button>
                </div>
              </div>

            </div>
            <div className="stocks-css">
              <div className="stocks">
                <div>
                  <p><b>DOW J</b></p>
                  <p>Dow Jones industrial Aver...</p>
                </div>
                <div className="stock-price">
                  <p><b>34557.21</b></p>
                  <button className="profit">+1.03</button>
                </div>
              </div>
            </div>
            <div className="stocks-css">
              <div className="stocks">
                <div>
                  <p><b>BA</b></p>
                  <p>The Boaing Company</p>
                </div>
                <div className="stock-price">
                  <p><b>34557.21</b></p>
                  <button className="profit">+23.03</button>
                </div>
              </div>
            </div><div className="stocks-css">
              <div className="stocks">
                <div>
                  <p><b>AAPL</b></p>
                  <p>Apple Inc.</p>
                </div>
                <div className="stock-price">
                  <p><b>34557.21</b></p>
                  <button className="loss">-73.03</button>
                </div>
              </div>

            </div>
            <div className="stocks-css">
              <div className="stocks">
                <div>
                  <p><b>DOW J</b></p>
                  <p>Dow Jones industrial Aver...</p>
                </div>
                <div className="stock-price">
                  <p><b>34557.21</b></p>
                  <button className="profit">+1.03</button>
                </div>
              </div>
            </div>
            <div className="stocks-css">
              <div className="stocks">
                <div>
                  <p><b>BA</b></p>
                  <p>The Boaing Company</p>
                </div>
                <div className="stock-price">
                  <p><b>34557.21</b></p>
                  <button className="profit">+23.03</button>
                </div>
              </div>
            </div>
            <div className="stocks-css">
              <div className="stocks">
                <div>
                  <p><b>AAPL</b></p>
                  <p>Apple Inc.</p>
                </div>
                <div className="stock-price">
                  <p><b>34557.21</b></p>
                  <button className="loss">-73.03</button>
                </div>
              </div>

            </div>
            <div className="stocks-css">
              <div className="stocks">
                <div>
                  <p><b>DOW J</b></p>
                  <p>Dow Jones industrial Aver...</p>
                </div>
                <div className="stock-price">
                  <p><b>34557.21</b></p>
                  <button className="profit">+1.03</button>
                </div>
              </div>
            </div>
            <div className="stocks-css">
              <div className="stocks">
                <div>
                  <p><b>BA</b></p>
                  <p>The Boaing Company</p>
                </div>
                <div className="stock-price">
                  <p><b>34557.21</b></p>
                  <button className="profit">+23.03</button>
                </div>
              </div>
            </div>
            <div className="stocks-css">
              <div className="stocks">
                <div>
                  <p><b>AAPL</b></p>
                  <p>Apple Inc.</p>
                </div>
                <div className="stock-price">
                  <p><b>34557.21</b></p>
                  <button className="loss">-73.03</button>
                </div>
              </div>

            </div>
            <div className="stocks-css">
              <div className="stocks">
                <div>
                  <p><b>DOW J</b></p>
                  <p>Dow Jones industrial Aver...</p>
                </div>
                <div className="stock-price">
                  <p><b>34557.21</b></p>
                  <button className="profit">+1.03</button>
                </div>
              </div>
            </div>
            <div className="stocks-css">
              <div className="stocks">
                <div>
                  <p><b>BA</b></p>
                  <p>The Boaing Company</p>
                </div>
                <div className="stock-price">
                  <p><b>34557.21</b></p>
                  <button className="profit">+23.03</button>
                </div>
              </div>
            </div>

          </div>

        </div>
        <div id="body-right">
          <div id="header">
            <div id="header-name">
              <h1>DOW J</h1><p>Dow Jones Industrial Average</p>
            </div>
            <div id="share-price">
              <p><b>34556.21</b></p>
              <p className="loss-num">-73.03</p>
            </div>
          </div>
          <div id="chart">
          </div>
          <div id="news-list">
            <div id="news-left">
              <div className="news">
                <p>Yahoo Finance</p>
                <b><p className="stock-info">Stock market live updates: Stock trade mixed amid signs of shortages, S&P 500 hover near record high</p></b>
                <p className="time">2m ago</p>
              </div>
              <div className="news">
                <p>Yahoo Finance</p>
                <b><p className="stock-info">Stock market live updates: Stock trade mixed amid signs of shortages, S&P 500 hover near record high</p></b>
                <p className="time">2m ago</p>
              </div>
            </div>
            <div id="news-right">
              <div className="news">
                <p>Yahoo Finance</p>
                <b><p className="stock-info">Stock market live updates: Stock trade mixed amid signs of shortages, S&P 500 hover near record high</p></b>
                <p className="time">2m ago</p>
              </div>
              <div className="news">
                <p>Yahoo Finance</p>
                <b><p className="stock-info">Stock market live updates: Stock trade mixed amid signs of shortages, S&P 500 hover near record high</p></b>
                <p className="time">2m ago</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </AppWrapper>
  );
}

export default App;
