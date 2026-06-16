import React from 'react';
import ProductList from './components/ProductList';
import { useFavorites } from './hooks/useFavorites';

export default function App() {
  const { favorites, toggleFavorite, isFavorite } = useFavorites();

  return (
    <>
      <style>{customStyles}</style>
      <div className="app-container">
        <header className="app-header">
          <h1>FakeStore <span>API</span></h1>
          <span className="fav-counter">Favoritos: {favorites.length}</span>
        </header>
        <main className="app-main">
          <ProductList
            favorites={favorites}
            onToggleFavorite={toggleFavorite}
            isFavorite={isFavorite}
          />
        </main>
      </div>
    </>
  );
}

const customStyles = `
  :root {
    --bg-base: #352c49;
    --bg-surface: #000000;
    --text-primary: #ffffff;
    --text-secondary: #9e89a3;
    --accent: #8434b9;
    --error: #cf6679;
    --card-shadow: rgba(0, 0, 0, 0.4);
    --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: var(--bg-base);
    color: var(--text-primary);
    font-family: var(--font-family);
    -webkit-font-smoothing: antialiased;
  }

  .app-container {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: var(--bg-base);
  }

  .app-header {
    background-color: var(--bg-surface);
    padding: 1.5rem 2rem;
    text-align: center;
    border-bottom: 1px solid #333;
    position: sticky;
    top: 0;
    z-index: 10;
    box-shadow: 0 4px 12px var(--card-shadow);
  }

  .app-header h1 {
    margin: 0 0 0.5rem 0;
    font-size: 2.8rem;
    font-weight: 700;
    letter-spacing: 5px;
  }

  .app-header span {
    color: var(--accent);
  }

  .fav-counter {
    font-size: 1rem;
    color: var(--text-secondary);
    letter-spacing: 1px;
  }

  .app-main {
    flex: 1;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }

  .status-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
  }

  .status-text {
    font-size: 1.2rem;
    color: var(--text-secondary);
    margin-top: 1rem;
  }

  .status-container.error .status-text {
    color: var(--error);
    background: rgba(207, 102, 121, 0.1);
    padding: 1rem 2rem;
    border-radius: 8px;
    border: 1px solid var(--error);
  }

  .spinner {
    width: 40px;
    height: 40px;
    border: 4px solid rgba(187, 134, 252, 0.2);
    border-left-color: var(--accent);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }

  @keyframes spin {
    to { transform: rotate(360deg); }
  }

  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
  }

  .product-card {
    background-color: var(--bg-surface);
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.23);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border: 1px solid #202020;
  }

  .product-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 20px var(--card-shadow);
    border-color: #000000;
  }

  .image-container {
    height: 220px;
    background-color: #c2c2c2;

    padding: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .image-container img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    transition: transform 0.4s ease;
  }

  .product-card:hover .image-container img {
    transform: scale(1.1);
  }

  .card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: space-between;
  }

  .card-content h3 {
    margin: 0 0 1rem 0;
    font-size: 1.05rem;
    font-weight: 500;
    line-height: 1.4;
    color: var(--text-primary);
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .price {
    font-size: 1.4rem;
    font-weight: 700;
    color: var(--accent);
    margin: 0 0 1rem 0;
  }

  .favorite-btn {
    background: none;
    border: 2px solid #333;
    border-radius: 8px;
    color: var(--text-secondary);
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0.4rem 0.8rem;
    transition: all 0.2s ease;
    align-self: flex-start;
  }

  .favorite-btn:hover {
    border-color: var(--accent);
    color: var(--accent);
  }

  .favorite-btn.is-favorite {
    border-color: var(--accent);
    color: #ffd700;
  }

  @media (max-width: 768px) {
    .app-main {
      padding: 1rem;
    }
    .product-grid {
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    }
    .image-container {
      height: 160px;
      padding: 1rem;
    }
    .card-content {
      padding: 1rem;
    }
    .card-content h3 {
      font-size: 0.95rem;
    }
    .price {
      font-size: 1.2rem;
    }
  }
`;
