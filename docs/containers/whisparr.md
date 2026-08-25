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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8563" onclick="CopyToClipboard('tag8563');return false;" class="tag-decoration">v2</div><div id="tag25774" onclick="CopyToClipboard('tag25774');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag18448" onclick="CopyToClipboard('tag18448');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag7761" onclick="CopyToClipboard('tag7761');return false;" class="tag-decoration">v2-v2</div><div id="tag26932" onclick="CopyToClipboard('tag26932');return false;" class="tag-decoration">v2-v2.2</div><div id="tag9409" onclick="CopyToClipboard('tag9409');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag19946" onclick="CopyToClipboard('tag19946');return false;" class="tag-decoration">v2-develop</div><div id="tag8775" onclick="CopyToClipboard('tag8775');return false;" class="tag-decoration">v2-develop-fe929dd</div><div id="tag2924" onclick="CopyToClipboard('tag2924');return false;" class="tag-decoration">v2-develop-2.2.0-develop.156</div><div id="tag23269" onclick="CopyToClipboard('tag23269');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag26319" onclick="CopyToClipboard('tag26319');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag3653" onclick="CopyToClipboard('tag3653');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/fe929dd150f3395cae8c8f34fa3ac0e9bde19636" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32800434558" target="_blank">2026-08-25 02:11:05</a></td></tr>
<tr><td><div id="tag16" onclick="CopyToClipboard('tag16');return false;" class="tag-decoration">v3</div><div id="tag29290" onclick="CopyToClipboard('tag29290');return false;" class="tag-decoration">v3-edb7863</div><div id="tag10306" onclick="CopyToClipboard('tag10306');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag16191" onclick="CopyToClipboard('tag16191');return false;" class="tag-decoration">v3-v3</div><div id="tag16889" onclick="CopyToClipboard('tag16889');return false;" class="tag-decoration">v3-v3.3</div><div id="tag9455" onclick="CopyToClipboard('tag9455');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag15172" onclick="CopyToClipboard('tag15172');return false;" class="tag-decoration">v3-develop</div><div id="tag11061" onclick="CopyToClipboard('tag11061');return false;" class="tag-decoration">v3-develop-c03b173</div><div id="tag6472" onclick="CopyToClipboard('tag6472');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1270</div><div id="tag11627" onclick="CopyToClipboard('tag11627');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag25935" onclick="CopyToClipboard('tag25935');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag20477" onclick="CopyToClipboard('tag20477');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c03b173d40b33604e09520e061306e7cf17004ca" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32677111008" target="_blank">2026-08-24 00:34:43</a></td></tr>
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
