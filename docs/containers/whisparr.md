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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag12851" onclick="CopyToClipboard('tag12851');return false;" class="tag-decoration">v2</div><div id="tag18228" onclick="CopyToClipboard('tag18228');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag15072" onclick="CopyToClipboard('tag15072');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag27682" onclick="CopyToClipboard('tag27682');return false;" class="tag-decoration">v2-v2</div><div id="tag21644" onclick="CopyToClipboard('tag21644');return false;" class="tag-decoration">v2-v2.2</div><div id="tag13112" onclick="CopyToClipboard('tag13112');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag4470" onclick="CopyToClipboard('tag4470');return false;" class="tag-decoration">v2-develop</div><div id="tag24163" onclick="CopyToClipboard('tag24163');return false;" class="tag-decoration">v2-develop-b17edff</div><div id="tag29655" onclick="CopyToClipboard('tag29655');return false;" class="tag-decoration">v2-develop-2.2.0-develop.167</div><div id="tag2975" onclick="CopyToClipboard('tag2975');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag22388" onclick="CopyToClipboard('tag22388');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag13317" onclick="CopyToClipboard('tag13317');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/b17edffa401902ddd3b940eaee52759e35f4beb9" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32871575302" target="_blank">2026-08-25 16:22:24</a></td></tr>
<tr><td><div id="tag27671" onclick="CopyToClipboard('tag27671');return false;" class="tag-decoration">v3</div><div id="tag32077" onclick="CopyToClipboard('tag32077');return false;" class="tag-decoration">v3-edb7863</div><div id="tag25249" onclick="CopyToClipboard('tag25249');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag26572" onclick="CopyToClipboard('tag26572');return false;" class="tag-decoration">v3-v3</div><div id="tag9081" onclick="CopyToClipboard('tag9081');return false;" class="tag-decoration">v3-v3.3</div><div id="tag23360" onclick="CopyToClipboard('tag23360');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag30163" onclick="CopyToClipboard('tag30163');return false;" class="tag-decoration">v3-develop</div><div id="tag23719" onclick="CopyToClipboard('tag23719');return false;" class="tag-decoration">v3-develop-c03b173</div><div id="tag743" onclick="CopyToClipboard('tag743');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1270</div><div id="tag20765" onclick="CopyToClipboard('tag20765');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag32013" onclick="CopyToClipboard('tag32013');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag29273" onclick="CopyToClipboard('tag29273');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c03b173d40b33604e09520e061306e7cf17004ca" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32677111008" target="_blank">2026-08-24 00:34:43</a></td></tr>
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
