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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5910" onclick="CopyToClipboard('tag5910');return false;" class="tag-decoration">release</div><div id="tag21907" onclick="CopyToClipboard('tag21907');return false;" class="tag-decoration">release-59f1733</div><div id="tag14492" onclick="CopyToClipboard('tag14492');return false;" class="tag-decoration">release-0.24.1098</div><div id="tag24094" onclick="CopyToClipboard('tag24094');return false;" class="tag-decoration">release-v0</div><div id="tag8963" onclick="CopyToClipboard('tag8963');return false;" class="tag-decoration">release-v0.24</div><div id="tag26735" onclick="CopyToClipboard('tag26735');return false;" class="tag-decoration">release-v0.24.1098</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/59f1733b953e83eaef9b389a669d75d6c69a586a" target="_blank">Version update: 0.24.1094 => 0.24.1098</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21935587361" target="_blank">2026-02-12 06:06:35</a></td></tr>
<tr><td><div id="tag30132" onclick="CopyToClipboard('tag30132');return false;" class="tag-decoration">testing</div><div id="tag8392" onclick="CopyToClipboard('tag8392');return false;" class="tag-decoration">testing-855e9bc</div><div id="tag26277" onclick="CopyToClipboard('tag26277');return false;" class="tag-decoration">testing-0.24.1103</div><div id="tag18416" onclick="CopyToClipboard('tag18416');return false;" class="tag-decoration">testing-v0</div><div id="tag24327" onclick="CopyToClipboard('tag24327');return false;" class="tag-decoration">testing-v0.24</div><div id="tag5047" onclick="CopyToClipboard('tag5047');return false;" class="tag-decoration">testing-v0.24.1103</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/855e9bcf77fd91d4f6ffd1baccf5284bbc963872" target="_blank">Version update: 0.24.1098 => 0.24.1103</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21976559831" target="_blank">2026-02-13 06:02:40</a></td></tr>
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
