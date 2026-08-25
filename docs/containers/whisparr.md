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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag16461" onclick="CopyToClipboard('tag16461');return false;" class="tag-decoration">v2</div><div id="tag1937" onclick="CopyToClipboard('tag1937');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag28223" onclick="CopyToClipboard('tag28223');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag3784" onclick="CopyToClipboard('tag3784');return false;" class="tag-decoration">v2-v2</div><div id="tag16482" onclick="CopyToClipboard('tag16482');return false;" class="tag-decoration">v2-v2.2</div><div id="tag7186" onclick="CopyToClipboard('tag7186');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag861" onclick="CopyToClipboard('tag861');return false;" class="tag-decoration">v2-develop</div><div id="tag29575" onclick="CopyToClipboard('tag29575');return false;" class="tag-decoration">v2-develop-1998a42</div><div id="tag10699" onclick="CopyToClipboard('tag10699');return false;" class="tag-decoration">v2-develop-2.2.0-develop.171</div><div id="tag28496" onclick="CopyToClipboard('tag28496');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag4764" onclick="CopyToClipboard('tag4764');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag12008" onclick="CopyToClipboard('tag12008');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/1998a42875701bab3e1be6ac6bb565e1615727f8" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32877411482" target="_blank">2026-08-25 17:21:30</a></td></tr>
<tr><td><div id="tag30419" onclick="CopyToClipboard('tag30419');return false;" class="tag-decoration">v3</div><div id="tag9302" onclick="CopyToClipboard('tag9302');return false;" class="tag-decoration">v3-edb7863</div><div id="tag24536" onclick="CopyToClipboard('tag24536');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag25066" onclick="CopyToClipboard('tag25066');return false;" class="tag-decoration">v3-v3</div><div id="tag26127" onclick="CopyToClipboard('tag26127');return false;" class="tag-decoration">v3-v3.3</div><div id="tag5406" onclick="CopyToClipboard('tag5406');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/edb7863d4413fbd2f1146b1b486ad20f46567325" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328857936" target="_blank">2026-08-20 03:36:42</a></td></tr>
<tr><td><div id="tag22879" onclick="CopyToClipboard('tag22879');return false;" class="tag-decoration">v3-develop</div><div id="tag25128" onclick="CopyToClipboard('tag25128');return false;" class="tag-decoration">v3-develop-c03b173</div><div id="tag21070" onclick="CopyToClipboard('tag21070');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1270</div><div id="tag8754" onclick="CopyToClipboard('tag8754');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag17371" onclick="CopyToClipboard('tag17371');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag31655" onclick="CopyToClipboard('tag31655');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/c03b173d40b33604e09520e061306e7cf17004ca" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32677111008" target="_blank">2026-08-24 00:34:43</a></td></tr>
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
