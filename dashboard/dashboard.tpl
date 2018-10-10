
<section class="ux-content ux-dashboard">
    <h2>@@titleDashboard</h2>
    <!-- BEGIN: Grid -->
    <div class="ux-dashboard--grid">
        <!-- <div class="ux-dashboard--grid-col"> -->
            <div class="ux-widget expanded" data-toggle-state="expanded"> <!-- Change class expanded to data-toggle-state for collapse expand JS -->
                <header class="ux-widget__header">
                    <h6 class="ux-widget__title">Fabric Issues by Severity</h6>
                    <a href="#/" class="ux-widget__toggle" data-toggle="toggle-collapse">
                        <button class="btn btn--icon btn--small">
                            <span class="icon-chevron-up icon-small"></span>
                        </button>
                    </a>
                </header>
                <div class="ux-widget__content animated fadeIn">
                    <div class="ux-widget__chart proto-img">
                        <img src="assets/images/chart-donut-status.png" alt="Donut Chart">
                    </div>
                    <div class="issues-stats-counters ux-widget__legend">
                        <dl class="ux-legend ux-legend__lrg">
                            <dt class="status-critical">25</dt>
                            <dd>Critical</dd>
                            <dt class="status-major">25</dt>
                            <dd>Major</dd>
                            <dt class="status-minor">25</dt>
                            <dd>Minor</dd>
                            <dt class="status-neutral">50</dt>
                            <dd>Minor</dd>
                        </dl>
                    </div>
                </div>
            </div>

            <div class="ux-widget expanded" data-toggle-state="expanded">
                <header class="ux-widget__header">
                    <h6 class="ux-widget__title">
                        <label>Anomalies by</label>
                        <select class="custom-select ml-1 ux-form-select">
                            <option value="1" selected>Type</option>
                            <option value="2">Severity</option>
                        </select>
                    </h6>
                    <a href="#/" class="ux-widget__toggle" data-toggle="toggle-collapse">
                        <button class="btn btn--icon btn--small">
                            <span class="icon-chevron-up icon-small"></span>
                        </button>
                    </a>
                </header>
                <div class="ux-widget__content animated fadeIn">
                    <div class="ux-widget__chart proto-img">
                        <img src="assets/images/chart-donut-types.png" alt="Donut Chart">
                    </div>
                    <div class="issues-stats-counters ux-widget__legend">
                        <dl class="ux-legend ux-legend__standard">
                            <dt class="ux-legend-status"><em class="status-dot status-1"></em></dt>
                            <dd>CPU &amp; Memory <em>(3)</em></dd>
                            <dt class="ux-legend-status"><em class="status-dot status-2"></em></dt>
                            <dd>Message Queue <em>(20)</em></dd>
                            <dt class="ux-legend-status"><em class="status-dot status-3"></em></dt>
                            <dd>Fabric Utilization <em>(18)</em></dd>
                            <dt class="ux-legend-status"><em class="status-dot status-4"></em></dt>
                            <dd>Statistics <em>(14)</em></dd>
                            <dt class="ux-legend-status"><em class="status-dot status-5"></em></dt>
                            <dd>Flow <em>(27)</em></dd>
                        </dl>
                    </div>
                </div>
            </div>

        <!-- </div>
        <div class="ux-dashboard--grid-col"> -->

            <div class="ux-widget expanded" data-toggle-state="expanded">
                <header class="ux-widget__header">
                    <h6 class="ux-widget__title">Fabric Issues by Severity</h6>
                    <a href="#/" class="ux-widget__toggle" data-toggle="toggle-collapse">
                        <button class="btn btn--icon btn--small">
                            <span class="icon-chevron-up icon-small"></span>
                        </button>
                    </a>
                </header>
                <div class="ux-widget__content animated fadeIn">
                    Graph
                </div>
            </div>

            <div class="ux-widget expanded" data-toggle-state="expanded">
                <header class="ux-widget__header">
                    <h6 class="ux-widget__title">Anomalies by Type</h6>
                    <a href="#/" class="ux-widget__toggle" data-toggle="toggle-collapse">
                        <button class="btn btn--icon btn--small">
                            <span class="icon-chevron-up icon-small"></span>
                        </button>
                    </a>
                </header>
                <div class="ux-widget__content animated fadeIn">
                    Graph
                </div>
            </div>
        </div>
    <!-- </div> -->
    <!-- END: Grid -->
</section>