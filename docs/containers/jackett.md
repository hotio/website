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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag31592" onclick="CopyToClipboard('tag31592');return false;" class="tag-decoration">release</div><div id="tag18406" onclick="CopyToClipboard('tag18406');return false;" class="tag-decoration">release-0.24.766</div><div id="tag25848" onclick="CopyToClipboard('tag25848');return false;" class="tag-decoration">release-0d2e700</div><div id="tag26279" onclick="CopyToClipboard('tag26279');return false;" class="tag-decoration">release-v0</div><div id="tag17584" onclick="CopyToClipboard('tag17584');return false;" class="tag-decoration">release-v0.24</div><div id="tag22412" onclick="CopyToClipboard('tag22412');return false;" class="tag-decoration">release-v0.24.766</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/0d2e700a2490c8122a7c8eb99480ced7f47daa98" target="_blank">Upstream update: null => alpinevpn-30708ff</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20842469527" target="_blank">2026-01-09 05:40:37</a></td></tr>
<tr><td><div id="tag11150" onclick="CopyToClipboard('tag11150');return false;" class="tag-decoration">testing</div><div id="tag17452" onclick="CopyToClipboard('tag17452');return false;" class="tag-decoration">testing-0.24.766</div><div id="tag30206" onclick="CopyToClipboard('tag30206');return false;" class="tag-decoration">testing-a9fc61c</div><div id="tag27168" onclick="CopyToClipboard('tag27168');return false;" class="tag-decoration">testing-v0</div><div id="tag2603" onclick="CopyToClipboard('tag2603');return false;" class="tag-decoration">testing-v0.24</div><div id="tag18620" onclick="CopyToClipboard('tag18620');return false;" class="tag-decoration">testing-v0.24.766</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/a9fc61c19f6a8071db8525e0480c664564fff0eb" target="_blank">enable arm64 smoketest</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20838161453" target="_blank">2026-01-09 01:36:09</a></td></tr>
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
