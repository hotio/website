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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag4296" onclick="CopyToClipboard('tag4296');return false;" class="tag-decoration">release</div><div id="tag14682" onclick="CopyToClipboard('tag14682');return false;" class="tag-decoration">release-bca3470</div><div id="tag32271" onclick="CopyToClipboard('tag32271');return false;" class="tag-decoration">release-0.24.1841</div><div id="tag13399" onclick="CopyToClipboard('tag13399');return false;" class="tag-decoration">release-v0</div><div id="tag30837" onclick="CopyToClipboard('tag30837');return false;" class="tag-decoration">release-v0.24</div><div id="tag13116" onclick="CopyToClipboard('tag13116');return false;" class="tag-decoration">release-v0.24.1841</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/bca3470e5fbdd959e4abbced2489f52660ab35ce" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25701773849" target="_blank">2026-05-11 22:45:31</a></td></tr>
<tr><td><div id="tag26146" onclick="CopyToClipboard('tag26146');return false;" class="tag-decoration">testing</div><div id="tag31055" onclick="CopyToClipboard('tag31055');return false;" class="tag-decoration">testing-ef47cbc</div><div id="tag10546" onclick="CopyToClipboard('tag10546');return false;" class="tag-decoration">testing-0.24.1841</div><div id="tag28310" onclick="CopyToClipboard('tag28310');return false;" class="tag-decoration">testing-v0</div><div id="tag6341" onclick="CopyToClipboard('tag6341');return false;" class="tag-decoration">testing-v0.24</div><div id="tag19079" onclick="CopyToClipboard('tag19079');return false;" class="tag-decoration">testing-v0.24.1841</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/ef47cbc5e39981229ff3ce6f543f80edbdd18a18" target="_blank">Upstream/Package update</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/25701779110" target="_blank">2026-05-11 22:45:37</a></td></tr>
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
