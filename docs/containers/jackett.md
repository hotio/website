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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag21587" onclick="CopyToClipboard('tag21587');return false;" class="tag-decoration">release</div><div id="tag22149" onclick="CopyToClipboard('tag22149');return false;" class="tag-decoration">release-99b418a</div><div id="tag27351" onclick="CopyToClipboard('tag27351');return false;" class="tag-decoration">release-0.24.1292</div><div id="tag27138" onclick="CopyToClipboard('tag27138');return false;" class="tag-decoration">release-v0</div><div id="tag29506" onclick="CopyToClipboard('tag29506');return false;" class="tag-decoration">release-v0.24</div><div id="tag16662" onclick="CopyToClipboard('tag16662');return false;" class="tag-decoration">release-v0.24.1292</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/99b418a8dfbe9e37c7f1da76b8d3754ef2ab3279" target="_blank">Version update: 0.24.1287 => 0.24.1292</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22751289540" target="_blank">2026-03-06 06:00:34</a></td></tr>
<tr><td><div id="tag3051" onclick="CopyToClipboard('tag3051');return false;" class="tag-decoration">testing</div><div id="tag17234" onclick="CopyToClipboard('tag17234');return false;" class="tag-decoration">testing-6b0a0ba</div><div id="tag5559" onclick="CopyToClipboard('tag5559');return false;" class="tag-decoration">testing-0.24.1292</div><div id="tag15123" onclick="CopyToClipboard('tag15123');return false;" class="tag-decoration">testing-v0</div><div id="tag8894" onclick="CopyToClipboard('tag8894');return false;" class="tag-decoration">testing-v0.24</div><div id="tag25381" onclick="CopyToClipboard('tag25381');return false;" class="tag-decoration">testing-v0.24.1292</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/6b0a0ba55e5f3a0f58580e41ae63c958d2cdf320" target="_blank">Version update: 0.24.1287 => 0.24.1292</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/22751290260" target="_blank">2026-03-06 06:00:35</a></td></tr>
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
