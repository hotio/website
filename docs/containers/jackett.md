---
hide:
  - toc
title: hotio/jackett
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/jackett){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/jackett/tags){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag25731" onclick="CopyToClipboard('tag25731');return false;" class="tag-decoration">release</div><div id="tag27810" onclick="CopyToClipboard('tag27810');return false;" class="tag-decoration">release-0.24.790</div><div id="tag28286" onclick="CopyToClipboard('tag28286');return false;" class="tag-decoration">release-1906b0d</div><div id="tag28029" onclick="CopyToClipboard('tag28029');return false;" class="tag-decoration">release-v0</div><div id="tag31846" onclick="CopyToClipboard('tag31846');return false;" class="tag-decoration">release-v0.24</div><div id="tag11811" onclick="CopyToClipboard('tag11811');return false;" class="tag-decoration">release-v0.24.790</div></td><td>Releases</td><td><a href="https://github.com/hotio/jackett/commit/1906b0d5a80b5c7b497fb174cfd36721d96ea659" target="_blank">Upstream update: alpinevpn-c1be17f => alpinevpn-0904450</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20850331013" target="_blank">2026-01-09 11:22:42</a></td></tr>
<tr><td><div id="tag12543" onclick="CopyToClipboard('tag12543');return false;" class="tag-decoration">testing</div><div id="tag3163" onclick="CopyToClipboard('tag3163');return false;" class="tag-decoration">testing-0.24.790</div><div id="tag8520" onclick="CopyToClipboard('tag8520');return false;" class="tag-decoration">testing-5cb8b37</div><div id="tag3276" onclick="CopyToClipboard('tag3276');return false;" class="tag-decoration">testing-v0</div><div id="tag5086" onclick="CopyToClipboard('tag5086');return false;" class="tag-decoration">testing-v0.24</div><div id="tag4218" onclick="CopyToClipboard('tag4218');return false;" class="tag-decoration">testing-v0.24.790</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/jackett/commit/5cb8b379835686ca4e6c2b11fdc44939c27f8846" target="_blank">Update upstream tag SHA and improve error handling in update scripts</a></td><td><a href="https://github.com/hotio/jackett/actions/runs/20844879338" target="_blank">2026-01-09 07:43:05</a></td></tr>
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
