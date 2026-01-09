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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag7736" onclick="CopyToClipboard('tag7736');return false;" class="tag-decoration">release</div><div id="tag28409" onclick="CopyToClipboard('tag28409');return false;" class="tag-decoration">release-0.24.766</div><div id="tag2471" onclick="CopyToClipboard('tag2471');return false;" class="tag-decoration">release-0d4c064</div><div id="tag25117" onclick="CopyToClipboard('tag25117');return false;" class="tag-decoration">release-v0</div><div id="tag4957" onclick="CopyToClipboard('tag4957');return false;" class="tag-decoration">release-v0.24</div><div id="tag25137" onclick="CopyToClipboard('tag25137');return false;" class="tag-decoration">release-v0.24.766</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/0d4c06449367326d1da2f396c9e14d10f8d2444f" target="_blank">enable arm64 smoketest</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20838168061" target="_blank">2026-01-09 01:36:29</a></td></tr>
<tr><td><div id="tag2202" onclick="CopyToClipboard('tag2202');return false;" class="tag-decoration">testing</div><div id="tag16262" onclick="CopyToClipboard('tag16262');return false;" class="tag-decoration">testing-0.24.766</div><div id="tag22113" onclick="CopyToClipboard('tag22113');return false;" class="tag-decoration">testing-a9fc61c</div><div id="tag21032" onclick="CopyToClipboard('tag21032');return false;" class="tag-decoration">testing-v0</div><div id="tag24466" onclick="CopyToClipboard('tag24466');return false;" class="tag-decoration">testing-v0.24</div><div id="tag17268" onclick="CopyToClipboard('tag17268');return false;" class="tag-decoration">testing-v0.24.766</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/a9fc61c19f6a8071db8525e0480c664564fff0eb" target="_blank">enable arm64 smoketest</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20838161453" target="_blank">2026-01-09 01:36:09</a></td></tr>
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
