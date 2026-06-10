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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag32131" onclick="CopyToClipboard('tag32131');return false;" class="tag-decoration">v2</div><div id="tag2325" onclick="CopyToClipboard('tag2325');return false;" class="tag-decoration">v2-465d7ca</div><div id="tag13057" onclick="CopyToClipboard('tag13057');return false;" class="tag-decoration">v2-2.2.0-release.108</div><div id="tag6790" onclick="CopyToClipboard('tag6790');return false;" class="tag-decoration">v2-v2</div><div id="tag9341" onclick="CopyToClipboard('tag9341');return false;" class="tag-decoration">v2-v2.2</div><div id="tag8404" onclick="CopyToClipboard('tag8404');return false;" class="tag-decoration">v2-v2.2.0</div></td><td>v2</td><td><a href="https://github.com/hotio/whisparr/commit/465d7cabe8312293c110e39bf67f184bc9a998ea" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27271181907" target="_blank">2026-06-10 10:51:47</a></td></tr>
<tr><td><div id="tag9850" onclick="CopyToClipboard('tag9850');return false;" class="tag-decoration">v2-develop</div><div id="tag29372" onclick="CopyToClipboard('tag29372');return false;" class="tag-decoration">v2-develop-6f299d7</div><div id="tag16665" onclick="CopyToClipboard('tag16665');return false;" class="tag-decoration">v2-develop-2.2.0-develop.135</div><div id="tag1564" onclick="CopyToClipboard('tag1564');return false;" class="tag-decoration">v2-develop-v2</div><div id="tag20787" onclick="CopyToClipboard('tag20787');return false;" class="tag-decoration">v2-develop-v2.2</div><div id="tag26889" onclick="CopyToClipboard('tag26889');return false;" class="tag-decoration">v2-develop-v2.2.0</div></td><td>v2-develop</td><td><a href="https://github.com/hotio/whisparr/commit/6f299d795bbb90b74906ea2993190da719e55d49" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27160917487" target="_blank">2026-06-08 19:13:28</a></td></tr>
<tr><td><div id="tag21000" onclick="CopyToClipboard('tag21000');return false;" class="tag-decoration">v3</div><div id="tag12787" onclick="CopyToClipboard('tag12787');return false;" class="tag-decoration">v3-7932ed4</div><div id="tag18015" onclick="CopyToClipboard('tag18015');return false;" class="tag-decoration">v3-3.3.3-release.683</div><div id="tag24059" onclick="CopyToClipboard('tag24059');return false;" class="tag-decoration">v3-v3</div><div id="tag6114" onclick="CopyToClipboard('tag6114');return false;" class="tag-decoration">v3-v3.3</div><div id="tag29048" onclick="CopyToClipboard('tag29048');return false;" class="tag-decoration">v3-v3.3.3</div></td><td>eros</td><td><a href="https://github.com/hotio/whisparr/commit/7932ed4668859862bc68a5f4c2e64dc7edd91d46" target="_blank">Version, Upstream or Packages update</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/25988087814" target="_blank">2026-05-17 10:16:41</a></td></tr>
<tr><td><div id="tag6081" onclick="CopyToClipboard('tag6081');return false;" class="tag-decoration">v3-develop</div><div id="tag28688" onclick="CopyToClipboard('tag28688');return false;" class="tag-decoration">v3-develop-8a5c6ec</div><div id="tag16978" onclick="CopyToClipboard('tag16978');return false;" class="tag-decoration">v3-develop-3.3.3-develop.760</div><div id="tag20937" onclick="CopyToClipboard('tag20937');return false;" class="tag-decoration">v3-develop-v3</div><div id="tag27414" onclick="CopyToClipboard('tag27414');return false;" class="tag-decoration">v3-develop-v3.3</div><div id="tag17492" onclick="CopyToClipboard('tag17492');return false;" class="tag-decoration">v3-develop-v3.3.3</div></td><td>eros-develop</td><td><a href="https://github.com/hotio/whisparr/commit/8a5c6ecd1c8d46bdfb9589376be6dc1854f6cf7a" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/whisparr/actions/runs/27172648715" target="_blank">2026-06-08 23:06:29</a></td></tr>
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
