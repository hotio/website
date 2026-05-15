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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag2273" onclick="CopyToClipboard('tag2273');return false;" class="tag-decoration">release</div><div id="tag17734" onclick="CopyToClipboard('tag17734');return false;" class="tag-decoration">release-5fecde8</div><div id="tag12433" onclick="CopyToClipboard('tag12433');return false;" class="tag-decoration">release-0.24.1866</div><div id="tag2856" onclick="CopyToClipboard('tag2856');return false;" class="tag-decoration">release-v0</div><div id="tag17897" onclick="CopyToClipboard('tag17897');return false;" class="tag-decoration">release-v0.24</div><div id="tag27757" onclick="CopyToClipboard('tag27757');return false;" class="tag-decoration">release-v0.24.1866</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/5fecde8b1056bfe100f04e641603dde9a983408a" target="_blank"></a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25916099612" target="_blank">2026-05-15 06:26:34</a></td></tr>
<tr><td><div id="tag8796" onclick="CopyToClipboard('tag8796');return false;" class="tag-decoration">testing</div><div id="tag46" onclick="CopyToClipboard('tag46');return false;" class="tag-decoration">testing-c975691</div><div id="tag27879" onclick="CopyToClipboard('tag27879');return false;" class="tag-decoration">testing-0.24.1866</div><div id="tag1662" onclick="CopyToClipboard('tag1662');return false;" class="tag-decoration">testing-v0</div><div id="tag453" onclick="CopyToClipboard('tag453');return false;" class="tag-decoration">testing-v0.24</div><div id="tag31683" onclick="CopyToClipboard('tag31683');return false;" class="tag-decoration">testing-v0.24.1866</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c975691562a459ff0d01c63b98c905e8f914c9de" target="_blank"></a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25916106959" target="_blank">2026-05-15 06:26:33</a></td></tr>
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
