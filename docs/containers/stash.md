---
hide:
  - toc
title: hotio/stash
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/stash){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/stash){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/stashapp/stash){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag1608" onclick="CopyToClipboard('tag1608');return false;" class="tag-decoration">nightly</div><div id="tag29429" onclick="CopyToClipboard('tag29429');return false;" class="tag-decoration">nightly-9b709ef61457b9efb38cdb7f6f8401595855947a</div><div id="tag11454" onclick="CopyToClipboard('tag11454');return false;" class="tag-decoration">nightly-61ab168</div></td><td>Unstable</td><td><a href="https://github.com/hotio/stash/commit/61ab1687f6d5a0d99e979a4bcad9ef250767cfbd" target="_blank">Upstream update: null => noblevpn-d461e72</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20842480941" target="_blank">2026-01-09 05:41:13</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag29952" onclick="CopyToClipboard('tag29952');return false;" class="tag-decoration">release</div><div id="tag5135" onclick="CopyToClipboard('tag5135');return false;" class="tag-decoration">release-0.30.1</div><div id="tag2788" onclick="CopyToClipboard('tag2788');return false;" class="tag-decoration">release-8fc70a9</div><div id="tag803" onclick="CopyToClipboard('tag803');return false;" class="tag-decoration">release-v0</div><div id="tag27590" onclick="CopyToClipboard('tag27590');return false;" class="tag-decoration">release-v0.30</div><div id="tag32128" onclick="CopyToClipboard('tag32128');return false;" class="tag-decoration">release-v0.30.1</div></td><td>Releases</td><td><a href="https://github.com/hotio/stash/commit/8fc70a97a33710ec95253bd25f6c9e589b14c9ca" target="_blank">Upstream update: noblevpn-d461e72 => noblevpn-5c07a3a</a></td><td><a href="https://github.com/hotio/stash/actions/runs/20845770822" target="_blank">2026-01-09 08:22:45</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="stash" \
        -p 9999:9999 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/stash
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      stash:
        container_name: stash
        image: ghcr.io/hotio/stash
        ports:
          - "9999:9999"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

--8<-- "includes/wireguard.md"
