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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag24738" onclick="CopyToClipboard('tag24738');return false;" class="tag-decoration">release</div><div id="tag8823" onclick="CopyToClipboard('tag8823');return false;" class="tag-decoration">release-0.24.790</div><div id="tag10666" onclick="CopyToClipboard('tag10666');return false;" class="tag-decoration">release-b626516</div><div id="tag29009" onclick="CopyToClipboard('tag29009');return false;" class="tag-decoration">release-v0</div><div id="tag31409" onclick="CopyToClipboard('tag31409');return false;" class="tag-decoration">release-v0.24</div><div id="tag681" onclick="CopyToClipboard('tag681');return false;" class="tag-decoration">release-v0.24.790</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/b626516d37db5f14373c2b4f55dcc9bf66f84549" target="_blank">Update upstream tag SHA and improve error handling in update scripts</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20844862988" target="_blank">2026-01-09 07:42:16</a></td></tr>
<tr><td><div id="tag15555" onclick="CopyToClipboard('tag15555');return false;" class="tag-decoration">testing</div><div id="tag21167" onclick="CopyToClipboard('tag21167');return false;" class="tag-decoration">testing-0.24.790</div><div id="tag4492" onclick="CopyToClipboard('tag4492');return false;" class="tag-decoration">testing-5cb8b37</div><div id="tag30883" onclick="CopyToClipboard('tag30883');return false;" class="tag-decoration">testing-v0</div><div id="tag513" onclick="CopyToClipboard('tag513');return false;" class="tag-decoration">testing-v0.24</div><div id="tag2220" onclick="CopyToClipboard('tag2220');return false;" class="tag-decoration">testing-v0.24.790</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/5cb8b379835686ca4e6c2b11fdc44939c27f8846" target="_blank">Update upstream tag SHA and improve error handling in update scripts</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20844879338" target="_blank">2026-01-09 07:43:05</a></td></tr>
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
