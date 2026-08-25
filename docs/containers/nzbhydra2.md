---
hide:
  - toc
title: hotio/nzbhydra2
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/theotherp/nzbhydra2){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24775" onclick="CopyToClipboard('tag24775');return false;" class="tag-decoration">release</div><div id="tag388" onclick="CopyToClipboard('tag388');return false;" class="tag-decoration">release-f3e66ac</div><div id="tag11699" onclick="CopyToClipboard('tag11699');return false;" class="tag-decoration">release-8.9.0</div><div id="tag18408" onclick="CopyToClipboard('tag18408');return false;" class="tag-decoration">release-v8</div><div id="tag10448" onclick="CopyToClipboard('tag10448');return false;" class="tag-decoration">release-v8.9</div><div id="tag21221" onclick="CopyToClipboard('tag21221');return false;" class="tag-decoration">release-v8.9.0</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/f3e66ac08681d1e40e0f8dbbfd693a87fed77e26" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/32889840189" target="_blank">2026-08-25 19:29:10</a></td></tr>
<tr><td><div id="tag4731" onclick="CopyToClipboard('tag4731');return false;" class="tag-decoration">testing</div><div id="tag32561" onclick="CopyToClipboard('tag32561');return false;" class="tag-decoration">testing-36a8c10</div><div id="tag7759" onclick="CopyToClipboard('tag7759');return false;" class="tag-decoration">testing-8.9.0</div><div id="tag17013" onclick="CopyToClipboard('tag17013');return false;" class="tag-decoration">testing-v8</div><div id="tag7920" onclick="CopyToClipboard('tag7920');return false;" class="tag-decoration">testing-v8.9</div><div id="tag5215" onclick="CopyToClipboard('tag5215');return false;" class="tag-decoration">testing-v8.9.0</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/36a8c107b7afe7b29884c7d54b3f85b970588537" target="_blank">Modified: meta.json</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/32889847669" target="_blank">2026-08-25 19:29:15</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="nzbhydra2" \
        -p 5076:5076 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -e WEBUI_PORTS="5076/tcp" \ #(3)!
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/nzbhydra2
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      nzbhydra2:
        container_name: nzbhydra2
        image: ghcr.io/hotio/nzbhydra2
        ports:
          - "5076:5076"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=5076/tcp #(3)!
        volumes:
          - /<host_folder_config>:/config
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
