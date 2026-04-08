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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag23294" onclick="CopyToClipboard('tag23294');return false;" class="tag-decoration">release</div><div id="tag27925" onclick="CopyToClipboard('tag27925');return false;" class="tag-decoration">release-9ede5f7</div><div id="tag7248" onclick="CopyToClipboard('tag7248');return false;" class="tag-decoration">release-8.5.4</div><div id="tag18827" onclick="CopyToClipboard('tag18827');return false;" class="tag-decoration">release-v8</div><div id="tag13933" onclick="CopyToClipboard('tag13933');return false;" class="tag-decoration">release-v8.5</div><div id="tag4566" onclick="CopyToClipboard('tag4566');return false;" class="tag-decoration">release-v8.5.4</div></td><td>Releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/9ede5f772e977f9a7ef0c4459c76149fac69365b" target="_blank">Version update: 8.5.3 => 8.5.4</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24148728161" target="_blank">2026-04-08 17:16:28</a></td></tr>
<tr><td><div id="tag9259" onclick="CopyToClipboard('tag9259');return false;" class="tag-decoration">testing</div><div id="tag19123" onclick="CopyToClipboard('tag19123');return false;" class="tag-decoration">testing-64b3c2b</div><div id="tag17159" onclick="CopyToClipboard('tag17159');return false;" class="tag-decoration">testing-8.5.4</div><div id="tag20983" onclick="CopyToClipboard('tag20983');return false;" class="tag-decoration">testing-v8</div><div id="tag21266" onclick="CopyToClipboard('tag21266');return false;" class="tag-decoration">testing-v8.5</div><div id="tag27585" onclick="CopyToClipboard('tag27585');return false;" class="tag-decoration">testing-v8.5.4</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/nzbhydra2/commit/64b3c2b7959b9786ba92d834cf03a3aa7a6c7859" target="_blank">Version update: 8.5.3 => 8.5.4</a></td><td><a href="https://github.com/hotio/nzbhydra2/actions/runs/24148729465" target="_blank">2026-04-08 17:16:29</a></td></tr>
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
