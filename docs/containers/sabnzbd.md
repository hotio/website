---
hide:
  - toc
title: hotio/sabnzbd
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/sabnzbd/sabnzbd){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag14674" onclick="CopyToClipboard('tag14674');return false;" class="tag-decoration">nightly</div><div id="tag25442" onclick="CopyToClipboard('tag25442');return false;" class="tag-decoration">nightly-be349ec</div><div id="tag26636" onclick="CopyToClipboard('tag26636');return false;" class="tag-decoration">nightly-bf412371358ed3773c5f0fff65400c9d1547bdc9</div></td><td>Every commit to develop</td><td><a href="https://github.com/hotio/sabnzbd/commit/be349ec998982884efcfbd64f264480ddec8c217" target="_blank">Upstream update: alpinevpn-6480c7b => alpinevpn-5063227</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21124050695" target="_blank">2026-01-19 03:14:00</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag6537" onclick="CopyToClipboard('tag6537');return false;" class="tag-decoration">release</div><div id="tag11886" onclick="CopyToClipboard('tag11886');return false;" class="tag-decoration">release-5dce5a0</div><div id="tag197" onclick="CopyToClipboard('tag197');return false;" class="tag-decoration">release-4.5.5</div><div id="tag9735" onclick="CopyToClipboard('tag9735');return false;" class="tag-decoration">release-v4</div><div id="tag6869" onclick="CopyToClipboard('tag6869');return false;" class="tag-decoration">release-v4.5</div><div id="tag716" onclick="CopyToClipboard('tag716');return false;" class="tag-decoration">release-v4.5.5</div></td><td>Releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/5dce5a07de9b70519db7e33e6aa10ceb8157dc66" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21113699802" target="_blank">2026-01-18 14:57:22</a></td></tr>
<tr><td><div id="tag5149" onclick="CopyToClipboard('tag5149');return false;" class="tag-decoration">testing</div><div id="tag31669" onclick="CopyToClipboard('tag31669');return false;" class="tag-decoration">testing-7ebbaf2</div><div id="tag707" onclick="CopyToClipboard('tag707');return false;" class="tag-decoration">testing-4.6.0Beta2</div></td><td>Pre-releases</td><td><a href="https://github.com/hotio/sabnzbd/commit/7ebbaf2bbf36ff6872ebba9421ca2997e209510e" target="_blank">Upstream update: alpinevpn-c2217dd => alpinevpn-6480c7b</a></td><td><a href="https://github.com/hotio/sabnzbd/actions/runs/21113700847" target="_blank">2026-01-18 14:57:29</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="sabnzbd" \
        -p 8080:8080 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e WEBUI_PORTS="8080/tcp" \ #(3)!
        -e ARGS="" \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/sabnzbd
    ```

    --8<-- "includes/annotations.md"

=== "compose"

    ```yaml linenums="1"
    services:
      sabnzbd:
        container_name: sabnzbd
        image: ghcr.io/hotio/sabnzbd
        ports:
          - "8080:8080"
        environment:
          - PUID=1000
          - PGID=1000
          - UMASK=002
          - TZ=Etc/UTC
          - WEBUI_PORTS=8080/tcp #(3)!
          - ARGS
        volumes:
          - /<host_folder_config>:/config
          - /<host_folder_data>:/data
    ```

    --8<-- "includes/annotations.md"

--8<-- "includes/wireguard.md"
