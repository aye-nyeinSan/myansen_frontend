export default function NotFoundPage() {
    return (
      <>
        <h1>404 Not Found</h1>
        <p>You landed on a page that just doesn't work right now.</p>
        <div style={{ width: '100%', height: 0, paddingBottom: '83%', position: 'relative' }}>
          <iframe
            src="https://giphy.com/embed/T1WqKkLY753dZghbu6"
            width="100%"
            height="100%"
            style={{ position: 'absolute' }}
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
        </div>
       
      </>
    );
}