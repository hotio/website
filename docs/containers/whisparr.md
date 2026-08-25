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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag3379" onclick="CopyToClipboard('tag3379');return false;" class="tag-decoration">v2</div><div id="tag7645" onclick="CopyToClipboard('tag7645');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag2560" onclick="CopyToClipboard('tag2560');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag1755" onclick="CopyToClipboard('tag1755');return false;" class="tag-decoration">v2-v2</div><div id="tag29014" onclick="CopyToClipboard('tag29014');return false;" class="tag-decoration">v2-v2.2</div><div id="tag413" onclick="CopyToClipboard('tag413');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag1078" onclick="CopyToClipboard('tag1078');return false;" class="tag-decoration">v2-develop</div><div id="tag21789" onclick="CopyToClipboard('tag21789');return false;" class="tag-decoration">v2-develop-7cd8ffd</div><div id="tag31524" onclick="CopyToClipboard('tag31524');return false;" class="tag-decoration">v2-develop-2.2.0-develop.163</div><div id="tag32419" onclick="CopyToClipboard('tag32419');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag11635" onclick="CopyToClipboard('tag11635');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag13139" onclick="CopyToClipboard('tag13139');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/7cd8ffd4a8a2fdb6f7906a72002519d350f0200e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32860216331" target="_blank">2026-08-25 14:33:09</a></td></tr>
<tr><td><div id="tag19155" onclick="CopyToClipboard('tag19155');return false;" class="tag-decoration">v3</div><div id="tag11896" onclick="CopyToClipboard('tag11896');return false;" class="tag-decoration">v3-edb7863</div><div id="tag22380" onclick="CopyToClipboard('tag22380');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag25833" onclick="CopyToClipboard('tag25833');return false;" class="tag-decoration">v3-v3</div><div id="tag11813" onclick="CopyToClipboard('tag11813');return false;" class="tag-decoration">v3-v3.3</div><div id="tag29885" onclick="CopyToClipboard('tag29885');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag11496" onclick="CopyToClipboard('tag11496');return false;" class="tag-decoration">v3-develop</div><div id="tag26787" onclick="CopyToClipboard('tag26787');return false;" class="tag-decoration">v3-develop-c03b173</div><div id="tag17595" onclick="CopyToClipboard('tag17595');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1270</div><div id="tag31776" onclick="CopyToClipboard('tag31776');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag23188" onclick="CopyToClipboard('tag23188');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag31532" onclick="CopyToClipboard('tag31532');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c03b173d40b33604e09520e061306e7cf17004ca" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32677111008" target="_blank">2026-08-24 00:34:43</a></td></tr>
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
