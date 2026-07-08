---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/jackett/jackett){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag10334" onclick="CopyToClipboard('tag10334');return false;" class="tag-decoration">release</div><div id="tag4148" onclick="CopyToClipboard('tag4148');return false;" class="tag-decoration">release-2557fd5</div><div id="tag19240" onclick="CopyToClipboard('tag19240');return false;" class="tag-decoration">release-0.24.2187</div><div id="tag18453" onclick="CopyToClipboard('tag18453');return false;" class="tag-decoration">release-v0</div><div id="tag29721" onclick="CopyToClipboard('tag29721');return false;" class="tag-decoration">release-v0.24</div><div id="tag23167" onclick="CopyToClipboard('tag23167');return false;" class="tag-decoration">release-v0.24.2187</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/2557fd5dd0186b0d829ad8df37448af788abba5c" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28927755056" target="_blank">2026-07-08 08:11:06</a></td></tr>
<tr><td><div id="tag8002" onclick="CopyToClipboard('tag8002');return false;" class="tag-decoration">testing</div><div id="tag25509" onclick="CopyToClipboard('tag25509');return false;" class="tag-decoration">testing-9e3ce98</div><div id="tag16272" onclick="CopyToClipboard('tag16272');return false;" class="tag-decoration">testing-0.24.2184</div><div id="tag11028" onclick="CopyToClipboard('tag11028');return false;" class="tag-decoration">testing-v0</div><div id="tag29631" onclick="CopyToClipboard('tag29631');return false;" class="tag-decoration">testing-v0.24</div><div id="tag5127" onclick="CopyToClipboard('tag5127');return false;" class="tag-decoration">testing-v0.24.2184</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/9e3ce981841a12d394092ed90ce5f6c308050125" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/28851804958" target="_blank">2026-07-07 08:15:46</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="jackett" \
        -p 9117:9117 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="9117/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      jackett:
        container_name: jackett
        image: ghcr.io/hotio/jackett
        ports:
          - "9117:9117"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=9117/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
