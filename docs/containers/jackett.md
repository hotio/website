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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag13261" onclick="CopyToClipboard('tag13261');return false;" class="tag-decoration">release</div><div id="tag24651" onclick="CopyToClipboard('tag24651');return false;" class="tag-decoration">release-79b5a35</div><div id="tag28173" onclick="CopyToClipboard('tag28173');return false;" class="tag-decoration">release-0.24.1841</div><div id="tag2148" onclick="CopyToClipboard('tag2148');return false;" class="tag-decoration">release-v0</div><div id="tag6494" onclick="CopyToClipboard('tag6494');return false;" class="tag-decoration">release-v0.24</div><div id="tag20906" onclick="CopyToClipboard('tag20906');return false;" class="tag-decoration">release-v0.24.1841</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/79b5a35f317b1a2b559cd641d57e2a9b83632ea9" target="_blank">Upstream or Packages update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25708365723" target="_blank">2026-05-12 01:50:52</a></td></tr>
<tr><td><div id="tag17234" onclick="CopyToClipboard('tag17234');return false;" class="tag-decoration">testing</div><div id="tag25809" onclick="CopyToClipboard('tag25809');return false;" class="tag-decoration">testing-6ccd45f</div><div id="tag20552" onclick="CopyToClipboard('tag20552');return false;" class="tag-decoration">testing-0.24.1841</div><div id="tag16838" onclick="CopyToClipboard('tag16838');return false;" class="tag-decoration">testing-v0</div><div id="tag26887" onclick="CopyToClipboard('tag26887');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9510" onclick="CopyToClipboard('tag9510');return false;" class="tag-decoration">testing-v0.24.1841</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/6ccd45fdeb952b8ac234a905496c6d4de141ed17" target="_blank">Upstream or Packages File update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25714912367" target="_blank">2026-05-12 05:15:18</a></td></tr>
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
