---
hide:
  - toc
title: hotio/whisparr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/whisparr){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project v2](https://github.com/whisparr/whisparr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-link-16: Upstream Project v3](https://github.com/whisparr/whisparr-eros){ class="header-links" target="_blank" rel="noopener" }  

<div id="tags-table">
  <table>
    <thead>
      <tr>
        <th>Tags <span class="twemoji" title="Click Tag to Copy"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"></path></svg></span></th>
        <th>Description</th>
        <th>Commit</th>
        <th>Last Updated</th>
      </tr>
    </thead>
    <tbody id="tags-table-body">
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32605" onclick="CopyToClipboard('tag32605');return false;" class="tag-decoration">v2</div><div id="tag17748" onclick="CopyToClipboard('tag17748');return false;" class="tag-decoration">v2-465f095</div><div id="tag14938" onclick="CopyToClipboard('tag14938');return false;" class="tag-decoration">v2-2.3.0-release.455</div><div id="tag26493" onclick="CopyToClipboard('tag26493');return false;" class="tag-decoration">v2-v2</div><div id="tag16703" onclick="CopyToClipboard('tag16703');return false;" class="tag-decoration">v2-v2.3</div><div id="tag20928" onclick="CopyToClipboard('tag20928');return false;" class="tag-decoration">v2-v2.3.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/465f0956b267fabf6006289908305827f559832b" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493225430" target="_blank">2026-11-24 21:38:58</a></td></tr>
<tr><td><div id="tag14315" onclick="CopyToClipboard('tag14315');return false;" class="tag-decoration">v2-develop</div><div id="tag21558" onclick="CopyToClipboard('tag21558');return false;" class="tag-decoration">v2-develop-174c47c</div><div id="tag29989" onclick="CopyToClipboard('tag29989');return false;" class="tag-decoration">v2-develop-2.3.0-develop.453</div><div id="tag25841" onclick="CopyToClipboard('tag25841');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag17068" onclick="CopyToClipboard('tag17068');return false;" class="tag-decoration">v2-develop-v2.3</div><div id="tag2719" onclick="CopyToClipboard('tag2719');return false;" class="tag-decoration">v2-develop-v2.3.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/174c47ca2300594f263955e22c187e40977fbb21" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45386947754" target="_blank">2026-11-24 11:44:29</a></td></tr>
<tr><td><div id="tag25270" onclick="CopyToClipboard('tag25270');return false;" class="tag-decoration">v3</div><div id="tag5340" onclick="CopyToClipboard('tag5340');return false;" class="tag-decoration">v3-4eb09fa</div><div id="tag19637" onclick="CopyToClipboard('tag19637');return false;" class="tag-decoration">v3-3.6.5-release.1886</div><div id="tag15238" onclick="CopyToClipboard('tag15238');return false;" class="tag-decoration">v3-v3</div><div id="tag18714" onclick="CopyToClipboard('tag18714');return false;" class="tag-decoration">v3-v3.6</div><div id="tag18350" onclick="CopyToClipboard('tag18350');return false;" class="tag-decoration">v3-v3.6.5</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/4eb09fa76d1d1dde83c9dcaa879cd4087a560b18" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493224431" target="_blank">2026-11-24 21:38:57</a></td></tr>
<tr><td><div id="tag1561" onclick="CopyToClipboard('tag1561');return false;" class="tag-decoration">v3-develop</div><div id="tag24630" onclick="CopyToClipboard('tag24630');return false;" class="tag-decoration">v3-develop-4757b23</div><div id="tag23906" onclick="CopyToClipboard('tag23906');return false;" class="tag-decoration">v3-develop-3.6.6-develop.1954</div><div id="tag29834" onclick="CopyToClipboard('tag29834');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag11928" onclick="CopyToClipboard('tag11928');return false;" class="tag-decoration">v3-develop-v3.6</div><div id="tag24396" onclick="CopyToClipboard('tag24396');return false;" class="tag-decoration">v3-develop-v3.6.6</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/4757b23dd9fb03b1011f087840503a7f2289c8df" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/45493242963" target="_blank">2026-11-24 21:39:04</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="whisparr" \
        -p 6969:6969 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="6969/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/whisparr
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      whisparr:
        container_name: whisparr
        image: ghcr.io/hotio/whisparr
        ports:
          - "6969:6969"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=6969/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
