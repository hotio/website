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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2964" onclick="CopyToClipboard('tag2964');return false;" class="tag-decoration">release</div><div id="tag13557" onclick="CopyToClipboard('tag13557');return false;" class="tag-decoration">release-e56ff25</div><div id="tag28916" onclick="CopyToClipboard('tag28916');return false;" class="tag-decoration">release-0.24.2027</div><div id="tag30710" onclick="CopyToClipboard('tag30710');return false;" class="tag-decoration">release-v0</div><div id="tag5870" onclick="CopyToClipboard('tag5870');return false;" class="tag-decoration">release-v0.24</div><div id="tag6003" onclick="CopyToClipboard('tag6003');return false;" class="tag-decoration">release-v0.24.2027</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/e56ff25f70fc4bcdf402e6fb4d30031636788c3e" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27056497048" target="_blank">2026-06-06 07:41:35</a></td></tr>
<tr><td><div id="tag5669" onclick="CopyToClipboard('tag5669');return false;" class="tag-decoration">testing</div><div id="tag15519" onclick="CopyToClipboard('tag15519');return false;" class="tag-decoration">testing-e8c0e4e</div><div id="tag21555" onclick="CopyToClipboard('tag21555');return false;" class="tag-decoration">testing-0.24.2031</div><div id="tag24638" onclick="CopyToClipboard('tag24638');return false;" class="tag-decoration">testing-v0</div><div id="tag2160" onclick="CopyToClipboard('tag2160');return false;" class="tag-decoration">testing-v0.24</div><div id="tag26714" onclick="CopyToClipboard('tag26714');return false;" class="tag-decoration">testing-v0.24.2031</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/e8c0e4e274198c32daf862eda0c0cabd79c42626" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/27085566301" target="_blank">2026-06-07 07:00:35</a></td></tr>
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
