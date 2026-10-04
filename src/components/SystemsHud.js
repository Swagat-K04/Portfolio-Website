"use client";
import React, { useState, useEffect } from "react";
import { iso8583Sample, benchmarkMetrics } from "@/data/portfolio";
import {
  Terminal,
  Zap,
  Award,
  Activity,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Play,
  RotateCcw,
  Sparkles,
  Layers,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function SystemsHud() {
  // ISO 8583 state
  const [isoTab, setIsoTab] = useState("fields"); // 'fields' | 'hex' | 'strategy'
  const [simulatingTx, setSimulatingTx] = useState(false);
  const [txSuccess, setTxSuccess] = useState(false);

  // C++ Benchmark state
  const [benchmarking, setBenchmarking] = useState(false);
  const [currentSpeed, setCurrentSpeed] = useState(2.54);
  const [benchProgress, setBenchProgress] = useState(100);

  // Run ISO 8583 Transaction Simulation
  const handleSimulateTx = () => {
    setSimulatingTx(true);
    setTxSuccess(false);
    setTimeout(() => {
      setSimulatingTx(false);
      setTxSuccess(true);
      setTimeout(() => setTxSuccess(false), 4000);
    }, 900);
  };

  // Run C++ Benchmark Animation
  const handleRunBenchmark = () => {
    setBenchmarking(true);
    setBenchProgress(0);
    setCurrentSpeed(0);

    let step = 0;
    const interval = setInterval(() => {
      step += 1;
      const speed = (2.54 * Math.sin((step / 20) * (Math.PI / 2))).toFixed(2);
      setCurrentSpeed(Number(speed));
      setBenchProgress(step * 5);

      if (step >= 20) {
        clearInterval(interval);
        setCurrentSpeed(2.54);
        setBenchProgress(100);
        setBenchmarking(false);
      }
    }, 45);
  };

  return (
    <section id="hud" className="hud-section">
      <div className="section-header">
        <div className="section-eyebrow">
          <Terminal size={15} />
          <span>SYSTEMS TELEMETRY &amp; BENCHMARKS</span>
        </div>
        <h2 className="section-title">Interactive Systems HUD</h2>
        <p className="section-subtitle">
          Real-world diagnostics, protocol inspectors, and high-performance computing metrics.
        </p>
      </div>

      <div className="hud-bento-grid">
        {/* ========================================================================= */}
        {/* MODULE 1: ISO 8583 Payment Packet Inspector (Span 2 cols) */}
        {/* ========================================================================= */}
        <div className="bento-card bento-span-2 bento-iso">
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-icon emerald">
                <Terminal size={18} />
              </div>
              <div>
                <h3 className="card-heading">ISO 8583 Payment Packet Inspector</h3>
                <p className="card-subheading">
                  Pine Labs POS terminal transaction gateway protocol analyzer
                </p>
              </div>
            </div>

            {/* Tab controls */}
            <div className="hud-tabs">
              <button
                className={`hud-tab-btn ${isoTab === "fields" ? "active" : ""}`}
                onClick={() => setIsoTab("fields")}
              >
                Decoded Fields
              </button>
              <button
                className={`hud-tab-btn ${isoTab === "hex" ? "active" : ""}`}
                onClick={() => setIsoTab("hex")}
              >
                Hex Dump
              </button>
              <button
                className={`hud-tab-btn ${isoTab === "strategy" ? "active" : ""}`}
                onClick={() => setIsoTab("strategy")}
              >
                SBI Strategy
              </button>
            </div>
          </div>

          <div className="iso-body">
            {isoTab === "fields" && (
              <div className="iso-fields-table">
                <div className="iso-table-header">
                  <span>Data Element</span>
                  <span>Field Name</span>
                  <span>Decoded Value</span>
                  <span>Description</span>
                </div>
                <div className="iso-table-rows">
                  {iso8583Sample.fields.map((f, i) => (
                    <div key={i} className="iso-table-row">
                      <span className="de-tag">{f.de}</span>
                      <span className="de-name">{f.name}</span>
                      <code className="de-val">{f.value}</code>
                      <span className="de-desc">{f.desc}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {isoTab === "hex" && (
              <div className="iso-hex-view">
                <div className="terminal-bar">
                  <span className="term-dot red" />
                  <span className="term-dot yellow" />
                  <span className="term-dot green" />
                  <span className="term-title">iso8583_packet_capture.bin</span>
                </div>
                <pre className="hex-pre">{iso8583Sample.hexDump}</pre>
                <div className="hex-meta">
                  <span>Bitmap: <code>{iso8583Sample.bitmap}</code></span>
                  <span>Length: 64 bytes</span>
                  <span>Encoding: EBCDIC/ASCII Packed</span>
                </div>
              </div>
            )}

            {isoTab === "strategy" && (
              <div className="iso-strategy-view">
                <div className="strategy-card">
                  <div className="strategy-title">
                    <Sparkles size={16} className="text-amber" />
                    <span>SBI Verified Card-Present Refund Architecture</span>
                  </div>
                  <p className="strategy-desc">
                    Integrated a parallel JSON-based dispatch pipeline for SBI verified card-present refunds.
                    Preserved legacy ISO 8583 binary pipelines without regression while ensuring idempotent settlement state transitions.
                  </p>
                  <div className="strategy-flow">
                    <div className="flow-step">POS Terminal (EMV)</div>
                    <ArrowRight size={14} className="flow-arr" />
                    <div className="flow-step highlight">JSON Strategy Adapter</div>
                    <ArrowRight size={14} className="flow-arr" />
                    <div className="flow-step">SBI Host Gateway</div>
                    <ArrowRight size={14} className="flow-arr" />
                    <div className="flow-step success">Settled (00)</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="card-footer-action">
            <div className="tx-status-indicator">
              {simulatingTx ? (
                <span className="status-badge running">
                  <Activity size={14} className="spin" /> Dispatching to Host Gateway...
                </span>
              ) : txSuccess ? (
                <span className="status-badge success">
                  <CheckCircle2 size={14} /> Host Response: MTI 0210 Approved (AuthCode: 94821)
                </span>
              ) : (
                <span className="status-badge idle">
                  <span className="dot-green" /> Ready for ISO 8583 Message Routing
                </span>
              )}
            </div>

            <button
              className="btn-action-small"
              onClick={handleSimulateTx}
              disabled={simulatingTx}
            >
              <Play size={14} />
              <span>Simulate POS Authorization</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODULE 2: C++20 Memory Benchmark Gauge */}
        {/* ========================================================================= */}
        <div id="hud-benchmark" className="bento-card bento-bench">
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-icon amber">
                <Zap size={18} />
              </div>
              <div>
                <h3 className="card-heading">C++20 In-Memory Speed Engine</h3>
                <p className="card-subheading">Parallel AES-256-GCM POSIX IPC Benchmark</p>
              </div>
            </div>
          </div>

          <div className="bench-body">
            {/* Speedometer metric */}
            <div className="speedometer-container">
              <div className="speed-number">
                <span className="val">{currentSpeed.toFixed(2)}</span>
                <span className="unit">GB/s</span>
              </div>
              <div className="speed-bar-track">
                <div
                  className="speed-bar-fill"
                  style={{ width: `${benchProgress}%` }}
                />
              </div>
              <div className="speed-labels">
                <span>0 GB/s</span>
                <span className="target-speed">Peak: 2.54 GB/s</span>
                <span>3.0 GB/s</span>
              </div>
            </div>

            {/* Performance breakdown pills */}
            <div className="bench-stats-list">
              <div className="bench-stat-row">
                <span className="label">POSIX Page-Fault Reduction:</span>
                <span className="badge-highlight">-65.4% (mmap + madvise)</span>
              </div>
              <div className="bench-stat-row">
                <span className="label">Cipher Spec:</span>
                <span className="badge-mono">OpenSSL AES-256-GCM</span>
              </div>
              <div className="bench-stat-row">
                <span className="label">Worker Architecture:</span>
                <span className="badge-mono">Shared Memory Circular Queue</span>
              </div>
            </div>
          </div>

          <div className="card-footer-action">
            <button
              className="btn-action-small full-w"
              onClick={handleRunBenchmark}
              disabled={benchmarking}
            >
              <RotateCcw size={14} className={benchmarking ? "spin" : ""} />
              <span>{benchmarking ? "Executing C++ Workers..." : "Re-Run Benchmark"}</span>
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODULE 3: LeetCode Peak Milestones */}
        {/* ========================================================================= */}
        <div className="bento-card bento-leetcode">
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-icon purple">
                <Award size={18} />
              </div>
              <div>
                <h3 className="card-heading">LeetCode Knight Master</h3>
                <p className="card-subheading">Peak algorithmic performance &amp; problem mastery</p>
              </div>
            </div>
            <a
              href="https://leetcode.com/u/swagat_k04/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-icon"
              title="View LeetCode Profile"
            >
              <ExternalLink size={15} />
            </a>
          </div>

          <div className="lc-body">
            <div className="lc-top-metrics">
              <div className="lc-badge-box">
                <div className="lc-rank-badge">KNIGHT</div>
                <div className="lc-rank-sub">Top 5% Global</div>
              </div>
              <div className="lc-score-box">
                <div className="lc-score">1800+</div>
                <div className="lc-score-label">Peak Contest Rating</div>
              </div>
              <div className="lc-score-box">
                <div className="lc-score">600+</div>
                <div className="lc-score-label">Problems Mastered</div>
              </div>
            </div>

            {/* Topic Mastery breakdown */}
            <div className="topic-bars">
              <div className="topic-row">
                <div className="topic-name">Graphs &amp; Trees</div>
                <div className="topic-track"><div className="topic-fill" style={{ width: "95%" }} /></div>
                <span className="topic-pct">Advanced</span>
              </div>
              <div className="topic-row">
                <div className="topic-name">Dynamic Programming</div>
                <div className="topic-track"><div className="topic-fill" style={{ width: "90%" }} /></div>
                <span className="topic-pct">Mastered</span>
              </div>
              <div className="topic-row">
                <div className="topic-name">Concurrency &amp; IPC</div>
                <div className="topic-track"><div className="topic-fill" style={{ width: "92%" }} /></div>
                <span className="topic-pct">Specialist</span>
              </div>
            </div>
          </div>

          <div className="card-footer-action">
            <a
              href="https://leetcode.com/u/swagat_k04/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-action-small full-w"
            >
              <ShieldCheck size={14} />
              <span>Verify Knight Profile on LeetCode</span>
            </a>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* MODULE 4: Real-Time Fraud Stream Kafka X-Ray (Span 2 cols) */}
        {/* ========================================================================= */}
        <div className="bento-card bento-span-2 bento-kafka">
          <div className="card-header">
            <div className="card-title-group">
              <div className="card-icon cyan">
                <Activity size={18} />
              </div>
              <div>
                <h3 className="card-heading">Kafka Real-Time Streaming Architecture</h3>
                <p className="card-subheading">
                  High-throughput fraud detection pipeline with SHAP &amp; Claude AI reasoning
                </p>
              </div>
            </div>
            <div className="auc-badge">AUC Score: 0.9614</div>
          </div>

          <div className="kafka-pipeline-flow">
            <div className="pipe-node">
              <div className="node-icon">⚡</div>
              <div className="node-name">Python Producer</div>
              <div className="node-desc">Synthetic Tx Generator</div>
            </div>

            <div className="pipe-arrow">
              <span className="arrow-line" />
              <span className="arrow-tag">3 Partitions</span>
            </div>

            <div className="pipe-node active-pulse">
              <div className="node-icon">🛰️</div>
              <div className="node-name">Apache Kafka</div>
              <div className="node-desc">Low-latency Broker</div>
            </div>

            <div className="pipe-arrow">
              <span className="arrow-line" />
              <span className="arrow-tag">7 Features</span>
            </div>

            <div className="pipe-node">
              <div className="node-icon">🧠</div>
              <div className="node-name">XGBoost + SHAP</div>
              <div className="node-desc">AUC 0.9614 + Explainability</div>
            </div>

            <div className="pipe-arrow">
              <span className="arrow-line" />
              <span className="arrow-tag">Pub/Sub</span>
            </div>

            <div className="pipe-node highlight">
              <div className="node-icon">📊</div>
              <div className="node-name">WebSocket Dashboard</div>
              <div className="node-desc">&lt;250ms Delivery</div>
            </div>
          </div>

          <div className="kafka-meta-footer">
            <div className="meta-point">
              <strong>SHAP Integration:</strong> Provides granular feature attribution for every flagged transaction.
            </div>
            <div className="meta-point">
              <strong>Claude AI Reasoning:</strong> Generates human-readable compliance explanations for fraud analysts.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
