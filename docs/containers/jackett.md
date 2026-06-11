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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag8015" onclick="CopyToClipboard('tag8015');return false;" class="tag-decoration">release</div><div id="tag2016" onclick="CopyToClipboard('tag2016');return false;" class="tag-decoration">release-ad48084</div><div id="tag13289" onclick="CopyToClipboard('tag13289');return false;" class="tag-decoration">release-0.24.2045</div><div id="tag4339" onclick="CopyToClipboard('tag4339');return false;" class="tag-decoration">release-v0</div><div id="tag10022" onclick="CopyToClipboard('tag10022');return false;" class="tag-decoration">release-v0.24</div><div id="tag28139" onclick="CopyToClipboard('tag28139');return false;" class="tag-decoration">release-v0.24.2045</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/ad480848271aaece29fc7058da3a97dd5d6b3777" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27339589397" target="_blank">2026-06-11 10:09:40</a></td></tr>
<tr><td><div id="tag1349" onclick="CopyToClipboard('tag1349');return false;" class="tag-decoration">testing</div><div id="tag29831" onclick="CopyToClipboard('tag29831');return false;" class="tag-decoration">testing-03a952f</div><div id="tag1129" onclick="CopyToClipboard('tag1129');return false;" class="tag-decoration">testing-0.24.2045</div><div id="tag12253" onclick="CopyToClipboard('tag12253');return false;" class="tag-decoration">testing-v0</div><div id="tag31497" onclick="CopyToClipboard('tag31497');return false;" class="tag-decoration">testing-v0.24</div><div id="tag31620" onclick="CopyToClipboard('tag31620');return false;" class="tag-decoration">testing-v0.24.2045</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/03a952f0582aecdb70683fe15ce39e35ee44dda3" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27339586240" target="_blank">2026-06-11 10:09:38</a></td></tr>
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
