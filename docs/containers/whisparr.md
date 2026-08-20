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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23144" onclick="CopyToClipboard('tag23144');return false;" class="tag-decoration">v2</div><div id="tag20398" onclick="CopyToClipboard('tag20398');return false;" class="tag-decoration">v2-ac34fb9</div><div id="tag27955" onclick="CopyToClipboard('tag27955');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag13866" onclick="CopyToClipboard('tag13866');return false;" class="tag-decoration">v2-v2</div><div id="tag26490" onclick="CopyToClipboard('tag26490');return false;" class="tag-decoration">v2-v2.2</div><div id="tag23283" onclick="CopyToClipboard('tag23283');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/ac34fb9bdcd5c926168c159710c7cc1119832512" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328861501" target="_blank">2026-08-20 03:36:45</a></td></tr>
<tr><td><div id="tag7683" onclick="CopyToClipboard('tag7683');return false;" class="tag-decoration">v2-develop</div><div id="tag27362" onclick="CopyToClipboard('tag27362');return false;" class="tag-decoration">v2-develop-d675b9c</div><div id="tag28672" onclick="CopyToClipboard('tag28672');return false;" class="tag-decoration">v2-develop-2.2.0-develop.151</div><div id="tag2745" onclick="CopyToClipboard('tag2745');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag23968" onclick="CopyToClipboard('tag23968');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag25613" onclick="CopyToClipboard('tag25613');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/d675b9c6246e018a14e9e11af01d2d8ac476cf28" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32328855417" target="_blank">2026-08-20 03:36:39</a></td></tr>
<tr><td><div id="tag29208" onclick="CopyToClipboard('tag29208');return false;" class="tag-decoration">v3</div><div id="tag18638" onclick="CopyToClipboard('tag18638');return false;" class="tag-decoration">v3-70a11f6</div><div id="tag14044" onclick="CopyToClipboard('tag14044');return false;" class="tag-decoration">v3-3.3.8-release.1097</div><div id="tag24510" onclick="CopyToClipboard('tag24510');return false;" class="tag-decoration">v3-v3</div><div id="tag12683" onclick="CopyToClipboard('tag12683');return false;" class="tag-decoration">v3-v3.3</div><div id="tag22971" onclick="CopyToClipboard('tag22971');return false;" class="tag-decoration">v3-v3.3.8</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/70a11f68215f03019a2b3cb906ba2e96d4631bf3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32147772700" target="_blank">2026-08-18 14:20:50</a></td></tr>
<tr><td><div id="tag10537" onclick="CopyToClipboard('tag10537');return false;" class="tag-decoration">v3-develop</div><div id="tag16113" onclick="CopyToClipboard('tag16113');return false;" class="tag-decoration">v3-develop-eca2b2f</div><div id="tag28554" onclick="CopyToClipboard('tag28554');return false;" class="tag-decoration">v3-develop-3.3.9-develop.1176</div><div id="tag21213" onclick="CopyToClipboard('tag21213');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag4784" onclick="CopyToClipboard('tag4784');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag32076" onclick="CopyToClipboard('tag32076');return false;" class="tag-decoration">v3-develop-v3.3.9</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/eca2b2fbacb45bc14758377692e7752551da55f1" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/32269371943" target="_blank">2026-08-19 15:19:33</a></td></tr>
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
