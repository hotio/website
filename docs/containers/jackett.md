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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag9930" onclick="CopyToClipboard('tag9930');return false;" class="tag-decoration">release</div><div id="tag10379" onclick="CopyToClipboard('tag10379');return false;" class="tag-decoration">release-0.24.807</div><div id="tag4204" onclick="CopyToClipboard('tag4204');return false;" class="tag-decoration">release-6e4f241</div><div id="tag20980" onclick="CopyToClipboard('tag20980');return false;" class="tag-decoration">release-v0</div><div id="tag21094" onclick="CopyToClipboard('tag21094');return false;" class="tag-decoration">release-v0.24</div><div id="tag28339" onclick="CopyToClipboard('tag28339');return false;" class="tag-decoration">release-v0.24.807</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/6e4f241d0051c8d46f5c911fc977569fd6dc4daf" target="_blank">Version update: 0.24.790 => 0.24.807</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20874339789" target="_blank">2026-01-10 06:37:01</a></td></tr>
<tr><td><div id="tag27066" onclick="CopyToClipboard('tag27066');return false;" class="tag-decoration">testing</div><div id="tag24878" onclick="CopyToClipboard('tag24878');return false;" class="tag-decoration">testing-0.24.807</div><div id="tag19804" onclick="CopyToClipboard('tag19804');return false;" class="tag-decoration">testing-c494a25</div><div id="tag18311" onclick="CopyToClipboard('tag18311');return false;" class="tag-decoration">testing-v0</div><div id="tag14901" onclick="CopyToClipboard('tag14901');return false;" class="tag-decoration">testing-v0.24</div><div id="tag9309" onclick="CopyToClipboard('tag9309');return false;" class="tag-decoration">testing-v0.24.807</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/c494a256f6b808358e4128f0e68366b8ef924336" target="_blank">Version update: 0.24.790 => 0.24.807</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20874340311" target="_blank">2026-01-10 06:37:04</a></td></tr>
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
        -v /<host_folder_config>:/config \
        ghcr.io/hotio/jackett
    ```

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
        volumes:
          - /<host_folder_config>:/config
    ```

--8<-- "includes/wireguard.md"
