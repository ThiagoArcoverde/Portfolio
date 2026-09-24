export function TerminalCard({ content }) {
  return (
    <div className="terminal-card" role="region" aria-label={content.ariaLabel}>
      <div className="terminal-topbar">
        <span className="terminal-dots"><i /><i /><i /></span>
        <span className="terminal-title">thiago / engineer.cs</span>
        <span className="terminal-status"><i /> {content.status}</span>
      </div>
      <div className="terminal-body">
        <p className="code-comment">// software should feel inevitable</p>
        <p><span className="code-keyword">public sealed class</span> <span className="code-type">Engineer</span></p>
        <p>{'{'}</p>
        <p className="code-indent"><span className="code-keyword">public string</span> Focus <span className="code-symbol">=&gt;</span> <span className="code-string">"clarity"</span>;</p>
        <p className="code-indent"><span className="code-keyword">public string</span> Craft <span className="code-symbol">=&gt;</span> <span className="code-string">"reliability"</span>;</p>
        <p className="code-indent"><span className="code-keyword">public string</span> Stack <span className="code-symbol">=&gt;</span> <span className="code-string">".NET / C#"</span>;</p>
        <p>{'}'}</p>
        <div className="terminal-rule" />
        <p className="terminal-prompt"><span>➜</span> {content.prompt}</p>
        <div className="terminal-rule terminal-rule-tight" />
        <div className="terminal-meta"><span>{content.location}</span><strong>Brazil, remote</strong></div>
        <div className="terminal-meta"><span>{content.experience}</span><strong>building since 2018</strong></div>
      </div>
    </div>
  )
}
