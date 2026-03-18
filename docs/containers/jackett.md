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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7169" onclick="CopyToClipboard('tag7169');return false;" class="tag-decoration">release</div><div id="tag22306" onclick="CopyToClipboard('tag22306');return false;" class="tag-decoration">release-59d2bfd</div><div id="tag13479" onclick="CopyToClipboard('tag13479');return false;" class="tag-decoration">release-0.24.1392</div><div id="tag11586" onclick="CopyToClipboard('tag11586');return false;" class="tag-decoration">release-v0</div><div id="tag7554" onclick="CopyToClipboard('tag7554');return false;" class="tag-decoration">release-v0.24</div><div id="tag12260" onclick="CopyToClipboard('tag12260');return false;" class="tag-decoration">release-v0.24.1392</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/59d2bfdac6d1f24e352db6a680c70bb48b124ac0" target="_blank">Version update: 0.24.1385 => 0.24.1392</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23181161650" target="_blank">2026-03-17 06:15:23</a></td></tr>
<tr><td><div id="tag6993" onclick="CopyToClipboard('tag6993');return false;" class="tag-decoration">testing</div><div id="tag1372" onclick="CopyToClipboard('tag1372');return false;" class="tag-decoration">testing-b12d896</div><div id="tag20366" onclick="CopyToClipboard('tag20366');return false;" class="tag-decoration">testing-0.24.1394</div><div id="tag24203" onclick="CopyToClipboard('tag24203');return false;" class="tag-decoration">testing-v0</div><div id="tag26403" onclick="CopyToClipboard('tag26403');return false;" class="tag-decoration">testing-v0.24</div><div id="tag4346" onclick="CopyToClipboard('tag4346');return false;" class="tag-decoration">testing-v0.24.1394</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/b12d896d2e20f320ace15ba45488335ace11c7c0" target="_blank">Version update: 0.24.1392 => 0.24.1394</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/23231743745" target="_blank">2026-03-18 06:14:28</a></td></tr>
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
