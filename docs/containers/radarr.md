---
hide:
  - toc
title: hotio/radarr
---

[:octicons-mark-github-16: GitHub](https://github.com/hotio/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: ghcr.io](https://github.com/orgs/hotio/packages/container/package/radarr){ class="header-links" target="_blank" rel="noopener" }  
[:octicons-container-16: docker.io](https://hub.docker.com/r/hotio/radarr/tags){ class="header-links" target="_blank" rel="noopener" }  

[:octicons-link-16: Upstream Project](https://github.com/radarr/radarr){ class="header-links" target="_blank" rel="noopener" }  

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
<tr><td><div id="tag8016" onclick="CopyToClipboard('tag8016');return false;" class="tag-decoration">nightly</div><div id="tag21169" onclick="CopyToClipboard('tag21169');return false;" class="tag-decoration">nightly-6.1.1.10317</div><div id="tag935" onclick="CopyToClipboard('tag935');return false;" class="tag-decoration">nightly-9b5a051</div></td><td>nightly</td><td><a href="https://github.com/hotio/radarr/commit/9b5a051a7da17761b178b9e6567433af44bdb794" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20845765581" target="_blank">2026-01-09 08:22:30</a></td></tr>
<tr><td><div class="tag-decoration-latest">latest</div><div id="tag5212" onclick="CopyToClipboard('tag5212');return false;" class="tag-decoration">release</div><div id="tag13428" onclick="CopyToClipboard('tag13428');return false;" class="tag-decoration">release-6.0.4.10291</div><div id="tag30388" onclick="CopyToClipboard('tag30388');return false;" class="tag-decoration">release-7b356a3</div></td><td>master</td><td><a href="https://github.com/hotio/radarr/commit/7b356a363aa7161ed37f5e4deffb73d75f29e936" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20845766242" target="_blank">2026-01-09 08:22:32</a></td></tr>
<tr><td><div id="tag22106" onclick="CopyToClipboard('tag22106');return false;" class="tag-decoration">testing</div><div id="tag17507" onclick="CopyToClipboard('tag17507');return false;" class="tag-decoration">testing-6.1.1.10317</div><div id="tag22440" onclick="CopyToClipboard('tag22440');return false;" class="tag-decoration">testing-8867d7e</div></td><td>develop</td><td><a href="https://github.com/hotio/radarr/commit/8867d7e6de16463e4ab3f3d5c161060df8d7e7a3" target="_blank">Upstream update: alpinevpn-30708ff => alpinevpn-c1be17f</a></td><td><a href="https://github.com/hotio/radarr/actions/runs/20845766805" target="_blank">2026-01-09 08:22:33</a></td></tr>
</tbody>
  </table>
</div>

## Starting the container

=== "cli"

    ```shell linenums="1"
    docker run --rm \
        --name="radarr" \
        -p 7878:7878 \
        -e PUID=1000 \
        -e PGID=1000 \
        -e UMASK=002 \
        -e TZ="Etc/UTC" \
        -v /<host_folder_config>:/config \
        -v /<host_folder_data>:/data \
        ghcr.io/hotio/radarr
    ```

=== "compose"

    ```yaml linenums="1"
    services:
      radarr:
        container_name: radarr
        image: ghcr.io/hotio/radarr
        ports:
          - "7878:7878"
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
