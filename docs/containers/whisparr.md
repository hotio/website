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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag19230" onclick="CopyToClipboard('tag19230');return false;" class="tag-decoration">v2</div><div id="tag4392" onclick="CopyToClipboard('tag4392');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag15207" onclick="CopyToClipboard('tag15207');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag8462" onclick="CopyToClipboard('tag8462');return false;" class="tag-decoration">v2-v2</div><div id="tag11222" onclick="CopyToClipboard('tag11222');return false;" class="tag-decoration">v2-v2.2</div><div id="tag31506" onclick="CopyToClipboard('tag31506');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag19771" onclick="CopyToClipboard('tag19771');return false;" class="tag-decoration">v2-develop</div><div id="tag29940" onclick="CopyToClipboard('tag29940');return false;" class="tag-decoration">v2-develop-6ec4ecf</div><div id="tag30976" onclick="CopyToClipboard('tag30976');return false;" class="tag-decoration">v2-develop-2.2.0-develop.179</div><div id="tag29403" onclick="CopyToClipboard('tag29403');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag4969" onclick="CopyToClipboard('tag4969');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag23632" onclick="CopyToClipboard('tag23632');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6ec4ecf4e3116211563cab10a4674df5e5787ba3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32900091539" target="_blank">2026-08-25 21:16:08</a></td></tr>
<tr><td><div id="tag4889" onclick="CopyToClipboard('tag4889');return false;" class="tag-decoration">v3</div><div id="tag15273" onclick="CopyToClipboard('tag15273');return false;" class="tag-decoration">v3-edb7863</div><div id="tag16135" onclick="CopyToClipboard('tag16135');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag13440" onclick="CopyToClipboard('tag13440');return false;" class="tag-decoration">v3-v3</div><div id="tag10697" onclick="CopyToClipboard('tag10697');return false;" class="tag-decoration">v3-v3.3</div><div id="tag26040" onclick="CopyToClipboard('tag26040');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag1385" onclick="CopyToClipboard('tag1385');return false;" class="tag-decoration">v3-develop</div><div id="tag19514" onclick="CopyToClipboard('tag19514');return false;" class="tag-decoration">v3-develop-d5dc06b</div><div id="tag32447" onclick="CopyToClipboard('tag32447');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1279</div><div id="tag5606" onclick="CopyToClipboard('tag5606');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag8051" onclick="CopyToClipboard('tag8051');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag10972" onclick="CopyToClipboard('tag10972');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d5dc06b0ee4062c66e3f710becc35249dbfa3a4c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32889131917" target="_blank">2026-08-25 19:21:37</a></td></tr>
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
