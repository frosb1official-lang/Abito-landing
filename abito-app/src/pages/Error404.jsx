function Error404() {
  return (
    <div style={{ textAlign: 'center', padding: '100px 20px' }}>
      <h1>404</h1>
      <h2>Страница не найдена</h2>
      <p>К сожалению, запрошенная страница не существует.</p>
      <a href="/">← Вернуться на главную</a>
    </div>
  );
}

export default Error404;