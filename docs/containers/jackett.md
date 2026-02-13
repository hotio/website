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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13011" onclick="CopyToClipboard('tag13011');return false;" class="tag-decoration">release</div><div id="tag6858" onclick="CopyToClipboard('tag6858');return false;" class="tag-decoration">release-1228e62</div><div id="tag27237" onclick="CopyToClipboard('tag27237');return false;" class="tag-decoration">release-0.24.1103</div><div id="tag14775" onclick="CopyToClipboard('tag14775');return false;" class="tag-decoration">release-v0</div><div id="tag25627" onclick="CopyToClipboard('tag25627');return false;" class="tag-decoration">release-v0.24</div><div id="tag21638" onclick="CopyToClipboard('tag21638');return false;" class="tag-decoration">release-v0.24.1103</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/1228e6272644d6ad2f9430cd84303ec93e70a58b" target="_blank">Version update: 0.24.1098 => 0.24.1103</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21976559162" target="_blank">2026-02-13 06:02:38</a></td></tr>
<tr><td><div id="tag7565" onclick="CopyToClipboard('tag7565');return false;" class="tag-decoration">testing</div><div id="tag9051" onclick="CopyToClipboard('tag9051');return false;" class="tag-decoration">testing-855e9bc</div><div id="tag233" onclick="CopyToClipboard('tag233');return false;" class="tag-decoration">testing-0.24.1103</div><div id="tag17919" onclick="CopyToClipboard('tag17919');return false;" class="tag-decoration">testing-v0</div><div id="tag28261" onclick="CopyToClipboard('tag28261');return false;" class="tag-decoration">testing-v0.24</div><div id="tag5791" onclick="CopyToClipboard('tag5791');return false;" class="tag-decoration">testing-v0.24.1103</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/855e9bcf77fd91d4f6ffd1baccf5284bbc963872" target="_blank">Version update: 0.24.1098 => 0.24.1103</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/21976559831" target="_blank">2026-02-13 06:02:40</a></td></tr>
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
